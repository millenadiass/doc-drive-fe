import { Component } from '@angular/core';
import { ConfigService } from './shared/utils/config.service'
import { environment } from 'src/environments/environment';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faSignOutAlt = faSignOutAlt;
  constructor(private configService: ConfigService, private userService : UserService, private router :Router) {
    
    configService.setApiURI(environment.url_api);
  }

  logout(){
    this.userService.logout();
    this.router.navigate(["/"]);
  }
}

