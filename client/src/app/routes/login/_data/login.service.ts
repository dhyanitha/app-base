import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BusService } from 'app/core/shared/bus.service';
import { IUser, ROLE } from 'app/routes/god/_data/user.model';

@Injectable()
export class LoginService {
  private url = 'credentials';
  constructor(private http: Http, private bus: BusService) { }

  postLogIn(credentials: IUserCredential) {
    this.http
      .post(this.url, credentials)
      .subscribe(r => {
        const userToken: string = r.json().access_token;
        localStorage.setItem('userToken', userToken);
        this.http
          .get('users/me')
          .subscribe(res => {
            const user = res.json();
            this.bus.emitUserStatus(user);
          })
        // TO Do: getCurrentUser();
        // this.bus.emitUserStatus(userToken);
        // if (userToken.roles.findIndex(r2 => r2 === ROLE.GOD) >= 0) {
        //   this.bus.navigateTo(['/god']);
        // } else {
        //   this.bus.navigateTo(['/']);
        // }
      });
  }
}

export interface IUserCredential {
  email: string;
  password: string;
}


