import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from 'app/tools/components/shared.module';
import { MessagesRoutingModule } from 'app/views/messages/messages.routing';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ],
  declarations: [MessagesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MessagesModule { }
