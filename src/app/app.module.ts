import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRenderOnlyOnDirective } from './app-render-only-on.directive';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AppRenderOnlyOnDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: 'user', component: UserComponent}])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
