import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { File as FileModel } from './model/file'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ContextMenuComponent } from 'ngx-contextmenu';
import { FileService } from '../shared/services/file.service';
import { FolderService } from '../shared/services/folder.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  @Input() files: Array<FileModel>;
  @Input() parentFolder: FileModel;
  @Output() LoadChildren = new EventEmitter<FileModel>();
  @Output() LoadParent = new EventEmitter<FileModel>();
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  constructor(private fileService: FileService, private folderService: FolderService) { }

  ngOnInit() {
  }

  itemClick(item: FileModel) {
    this.LoadChildren.emit(item);
  }

  itemDeleted(item: any){
    this.files = this.files.filter(file => file.id != item.id);
  }

  goBack() {
    this.LoadParent.emit(this.parentFolder);
  }


  onFileChange(fileToUpload: File) {
    this.fileService.uploadFile(fileToUpload).toPromise().then(result => {
      let file = new FileModel();
      file.isFile = true;
      file.name = fileToUpload.name;
      if (this.parentFolder != null && this.parentFolder != undefined) {
        file.parentId = this.parentFolder.id;
        file.parentFolder = this.parentFolder;
      }
      this.files.push(file);
    });
  }

  criarPasta(nomePasta : any){
    if(nomePasta.srcElement.value != null && nomePasta.srcElement.value != ""){
        let id = this.parentFolder != null && this.parentFolder != undefined ? this.parentFolder.id : 0;
        this.folderService.criarPasta(nomePasta.srcElement.value, id)
        .toPromise().then(result => {
          let folder = new FileModel();
          folder.isFile = false;
          folder.name = nomePasta.srcElement.value;
          if (this.parentFolder != null && this.parentFolder != undefined) {
            folder.parentId = this.parentFolder.id;
            folder.parentFolder = this.parentFolder;
          }
          this.files.push(folder);
        });
    }
    
  }

  itemModified(item : FileModel){
    let cdItem = this.files.findIndex(file => file.id == item.id);
    this.files[cdItem] = item;
  }
}
