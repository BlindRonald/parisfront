import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Paris';

  constructor(
    public router: Router,
    private authService: AuthService
  ) {
    this.authService.idleUser();
  }

}
