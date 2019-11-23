import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './file-manager.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileListComponent } from './file-list/file-list.component';
import { FileItemComponent } from './file-item/file-item.component';
import { ContextMenuModule } from 'ngx-contextmenu';
import { ngfModule } from "angular-file";

@NgModule({
  declarations: [FileManagerComponent, FileListComponent, FileItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ContextMenuModule.forRoot(),
    ngfModule
  ],
  exports: [
    FileManagerComponent
  ]
})
export class FileManagerModule { }
