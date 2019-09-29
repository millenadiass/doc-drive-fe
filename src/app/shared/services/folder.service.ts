import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ConfigService } from '../utils/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Folder } from '../models/folder';

@Injectable({
  providedIn: 'root'
})
export class FolderService extends BaseService {


  baseUrl: string = '';

  constructor(private http: HttpClient, private configService: ConfigService, private userService: UserService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  listarPastaRaiz() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.userService.getAuthToken()}`)
    return this.http
      .get<any>(`${this.baseUrl}/Directory/root`, { headers: headers })
      .pipe(map(data => {
        let lstFolder = new Array<Folder>();
        if (data) {
          data.folders.forEach(Genericfolder => {
            let folder = new Folder();
            Object.assign(folder, Genericfolder);
            folder.isFile = false;
            lstFolder.push(folder);
          });
          data.files.forEach(Genericfolder => {
            let folder = new Folder();
            Object.assign(folder, Genericfolder);
            folder.isFile = true;
            lstFolder.push(folder);
          })
        }
        return lstFolder;
      }), catchError(this.handleError))
  }

  listarPastasFilhas(pFolderId: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.userService.getAuthToken()}`)
    return this.http
      .get<any>(`${this.baseUrl}/Directory/${pFolderId}/children`, { headers: headers })
      .pipe(
        map(data => {
          let lstFolder = new Array<Folder>();
          if (data) {
            data.folders.forEach(Genericfolder => {
              let folder = new Folder();
              Object.assign(folder, Genericfolder);
              folder.isFile = false;
              lstFolder.push(folder);
            });
            data.files.forEach(Genericfolder => {
              let folder = new Folder();
              Object.assign(folder, Genericfolder);
              folder.isFile = true;
              lstFolder.push(folder);
            })
          }
          return lstFolder;
        }),
        catchError(this.handleError))
  }

}
