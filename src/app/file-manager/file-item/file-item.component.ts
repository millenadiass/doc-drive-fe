import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { File as FileModel } from '../model/file';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';
import { FileService } from 'src/app/shared/services/file.service';
import { FolderService } from 'src/app/shared/services/folder.service';
import { Folder } from 'src/app/shared/models/folder';
@Component({
  selector: 'app-file-item,[app-file-item]',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  faFolder = faFolder;
  faFile = faFile;
  @Input() file: FileModel;
  @Output() OnItemClick = new EventEmitter<FileModel>();
  @Output() OnItemDeleted = new EventEmitter<FileModel>();
  @Output() OnItemModified = new EventEmitter<FileModel>();
  @ViewChild('Pasta',{static: false}) public PastaMenu: ContextMenuComponent;
  @ViewChild('Arquivo',{static: false}) public ArquivoMenu: ContextMenuComponent;

  constructor(private fileService: FileService, private folderService: FolderService) { }

  ngOnInit() {
  }
  itemClick() {
    console.log(this.file);
    this.OnItemClick.emit(this.file);
  }

  excluirArquivo(file: FileModel) {

    this.fileService.deleteFile(file.id)
      .toPromise().then(result => {
        this.OnItemDeleted.emit(file);
      })
  }

  renomearItem(nomeArquivo: any, file : FileModel) {
    let fileArquivo = new Folder();
    file.name = nomeArquivo.srcElement.value;
    fileArquivo.fromFileModel(file);

    if (file.isFile){
      this.fileService.renameFile(fileArquivo)
      .toPromise().then(result => this.OnItemModified.emit(fileArquivo))
    } else {
      this.folderService.renameFolder(fileArquivo).toPromise().then(result => this.OnItemModified.emit(fileArquivo))
    }

   
  }

  excluirPasta(file: FileModel) {
    this.folderService.deleteFolder(file.id).toPromise().then(result => this.OnItemDeleted.emit(file));
  }

  renomearPasta() {

  }

}
