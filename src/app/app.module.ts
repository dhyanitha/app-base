import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from 'app/tools/shell/layout.module';
import { SharedModule } from 'app/tools/components/shared.module';
import { BusService } from 'app/tools/bus.service';
import { SecurityService } from 'app/tools/security.service';
import { Interceptor, JWTInterceptor, ErrorInterceptor } from 'app/tools/interceptor.service';
import { MessagesService } from 'app/tools/messages.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    BusService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessagesService,
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
