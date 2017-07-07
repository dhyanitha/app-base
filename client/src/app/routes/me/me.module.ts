import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { MeComponent } from './me/me.component';
import { SharedModule } from 'app/core/shared/shared.module';
import { MeService } from 'app/routes/me/me.service';
import { MeRegisterComponent } from './me-register/me-register.component';

@NgModule({
  imports: [
    CommonModule,
    MeRoutingModule,
    SharedModule
  ],
  declarations: [MeComponent, MeRegisterComponent],
  providers: [MeService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MeModule { }
