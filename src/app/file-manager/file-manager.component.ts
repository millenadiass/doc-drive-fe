import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from './model/file';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  @Input() files: Array<File>;
  @Input() parentFolder: File;
  @Output() LoadChildren = new EventEmitter<File>();
  @Output() LoadParent = new EventEmitter<File>();
  constructor() { }

  ngOnInit() {
  }

  itemClick(item: File) {
    this.LoadChildren.emit(item);
  }

  goBack() {
    this.LoadParent.emit(this.parentFolder);
  }

}
