import {Routes} from '@angular/router'

import {CadastroUserComponent} from './cadastro-user/cadastro-user.component'
import {LoginUserComponent} from './login-user/login-user.component'

export const ROUTES: Routes = [
    {path: 'cadastro', component: CadastroUserComponent}, 
    {path: 'login', component: LoginUserComponent}
]