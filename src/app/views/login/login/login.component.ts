import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/tools/components/schema.model';
import { SecurityService, IUserCredential } from 'app/tools/security.service';
import { environment } from './../../../../environments/environment';
import { SchemaService } from 'app/tools/components/schema.service';
import { Observable } from 'rxjs/Observable';
import { BusService } from 'app/tools/bus.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public formSchema: IFormSchema;

  constructor(
    private security: SecurityService,
    private bus: BusService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.formSchema == null)
      .subscribe(schemas => {
        if (schemas && schemas.metadata && schemas.metadata.name === 'login') {
          this.formSchema = schemas.form;
        }
      });
  }

  onSend(credentials: IUserCredential) {
    this.security
      .logInUser(credentials);
  }

}


