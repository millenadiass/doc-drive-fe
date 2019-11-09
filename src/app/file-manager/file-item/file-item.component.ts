import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { File } from '../model/file';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { ContextMenuComponent } from 'ngx-contextmenu';
@Component({
  selector: 'app-file-item,[app-file-item]',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  faFolder = faFolder;
  @Input() file: File;
  @Output() OnItemClick = new EventEmitter<File>();
  @ViewChild('Pasta') public PastaMenu: ContextMenuComponent;
  @ViewChild('Arquivo') public ArquivoMenu: ContextMenuComponent;

  constructor() { }

  ngOnInit() {
  }

  itemClick() {
    this.OnItemClick.emit(this.file);
  }
}
