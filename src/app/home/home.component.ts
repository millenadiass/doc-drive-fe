import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FolderService } from '../shared/services/folder.service';
import { File } from '../file-manager/model/file';
import { FileManagerComponent } from '../file-manager/file-manager.component';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('fileManager') fileManager: FileManagerComponent;
  lstFiles: Array<File>;

  constructor(private FolderServico: FolderService, private changeDetectorRef: ChangeDetectorRef) {
    this.FolderServico.listarPastaRaiz()
      .toPromise().then(result => {
        this.lstFiles = result.map(item => item.toFileModel());
      }).catch(error => alert(error));
  }

  ngOnInit() {
  }


  loadChildren(file) {
    this.fileManager.parentFolder = file;
    this.changeDetectorRef.detectChanges();
    this.FolderServico.listarPastasFilhas(file.id)
      .toPromise().then(result => {
        this.lstFiles = result.map(item => {
          let folder = item.toFileModel()
          folder.parentFolder = file;
          return folder;
        });
      }).catch(error => alert(error));
  }

  loadParent() {
    this.fileManager.parentFolder = null;
    this.changeDetectorRef.detectChanges();
    this.FolderServico.listarPastaRaiz()
      .toPromise().then(result => {
        this.lstFiles = result.map(item => item.toFileModel());
      }).catch(error => alert(error));
  }
}
