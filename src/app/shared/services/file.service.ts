import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { UserService } from './user.service';
import { Folder } from '../models/folder'


@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {

  baseUrl: string = '';

  constructor(private http: HttpClient, private configService: ConfigService, private userService: UserService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  uploadFile(file: File) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.userService.getAuthToken()}`);
    let body = new FormData();
    body.append("FileName", file.name);
    body.append("File", file);
    return this.http
      .post<any>(`${this.baseUrl}/file/upload?FileName=${file.name}`, body, { headers: headers });
  }

  deleteFile(id : number){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.userService.getAuthToken()}`);
    return this.http
    .delete(`${this.baseUrl}/file/${id}`, { headers: headers });
  }

  renameFile(FolderModel : Folder){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.userService.getAuthToken()}`);
    let body = JSON.stringify({Name : FolderModel.name, ParentId : FolderModel.parentId })
    return this.http
    .put(`${this.baseUrl}/file/${FolderModel.id}`, body, { headers: headers });
  
  }
}
