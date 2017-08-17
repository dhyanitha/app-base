import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationRoutingModule } from './organization.routing';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { SharedModule } from 'app/tools/components/shared.module';
import { OrganizationService } from 'app/views/organization/_data/organization.service';


@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ],
  declarations: [OrganizationHomeComponent],
  providers: [OrganizationService]
})
export class OrganizationModule { }
