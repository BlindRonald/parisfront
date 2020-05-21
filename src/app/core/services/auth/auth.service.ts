import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';
import { NgxToastrService } from '../ngx-toastr/ngx-toastr.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subscriptions: Subscription[] = [];

  constructor(
    private userIdle: UserIdleService,
    private router: Router,
    private ngxToastrService: NgxToastrService,
  ) { }

  isLogged(): boolean {
    if (localStorage.getItem('login') === 'true') {
      return true;
    } else {
      return false;
    }
  }

  setSession(data: IUser): void {
    localStorage.setItem('login', 'true');
    // Items...
  }

  logout(): void {
    localStorage.clear();
    window.location.href = `${window.location.origin}`;
  }

  idleUser() {
    this.userIdle.startWatching();

    this.subscriptions.push(this.userIdle.onTimerStart().subscribe(count => {
      const eventList = [
        'click', 'mouseover', 'keydown', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'scroll', 'keyup'
      ];
      eventList.map((event => {
        document.body.addEventListener(event, () => this.userIdle.resetTimer());
      }));
    }));

    this.subscriptions.push(this.userIdle.onTimeout().subscribe(() => {
      if (this.router.url !== '/') {
        this.userIdle.resetTimer();
        this.userIdle.stopTimer();
        this.userIdle.stopWatching();
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.ngxToastrService.error('Su sesión ha caducado por inactividad');
        this.logout();
      }
    }));
  }
}
