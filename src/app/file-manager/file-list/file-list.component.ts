import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from '../model/file';
@Component({
  selector: 'app-file-list,[app-file-list]',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {


  @Input() files: Array<File>;
  @Output() OnItemClick = new EventEmitter<File>();
  @Output() OnItemDeleted = new EventEmitter<File>();
  @Output() OnItemModified = new EventEmitter<File>();

  constructor() { }

  ngOnInit() {
  }

  itemClick(file: File) {
    this.OnItemClick.emit(file);
  }

  ItemDeleted(file: File) {
    this.OnItemDeleted.emit(file);
  }

  ItemModified(file : File){
    this.OnItemModified.emit(file);
  }
}
