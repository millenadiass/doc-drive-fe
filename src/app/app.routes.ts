import {Routes} from '@angular/router'

import {CadastroUserComponent} from './cadastro-user/cadastro-user.component'
import {LoginUserComponent} from './login-user/login-user.component'
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'cadastro', component: CadastroUserComponent}, 
    {path: 'login', component: LoginUserComponent}, 
    {path: 'home', component: HomeComponent}
]