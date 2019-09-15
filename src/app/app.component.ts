import { Component } from '@angular/core';
import { ConfigService } from './shared/utils/config.service'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private configService: ConfigService) {
    configService.setApiURI(environment.url_api);
  }
}

