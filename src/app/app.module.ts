import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { RouterModule } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContextMenuModule } from 'ngx-contextmenu';
import { FileManagerModule } from './file-manager/file-manager.module';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUserComponent,
    LoginUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ContextMenuModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    FileManagerModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
