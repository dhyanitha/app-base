import { Component, OnInit } from '@angular/core';
import { IWidgetSchema, IReportSchema, IFormSchema } from 'app/tools/components/_data/schema.model';
import { BusService } from 'app/tools/bus.service';
import { ROLE, STATUS } from 'app/tools/components/_data/user.model';
import { GodDataService } from 'app/views/god/_data/god-data.service';

@Component({
  selector: 'ab-god-users',
  templateUrl: './god-users.component.html',
  styles: []
})
export class GodUsersComponent implements OnInit {
  actionSchema: IWidgetSchema;
  reportSchema: IReportSchema;
  createFormSchema: IFormSchema;
  users: any[];
  constructor(private bus: BusService, private godData: GodDataService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.actionSchema == null)
      .subscribe(schemas => {
        if (schemas && schemas.metadata && schemas.metadata.name === 'god_users') {
          this.actionSchema = schemas.actions;
          this.createFormSchema = schemas.create;
          this.reportSchema = schemas.report;
          this.getUsers();
        }
      });
  }

  getUsers() {
    this.godData
      .getUsers()
      .subscribe(users => this.users = users);
  }
  onCreate(data) {
    console.log('creating user: ', data);
  }
  onDelete(data) {
    console.log('deleting user: ', data);
  }
  onRowAction(data) {
    console.log('action over user: ', data);
  }
}
