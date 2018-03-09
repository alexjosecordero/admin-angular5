import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/index';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './_helpers/index';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RegisterComponent } from './register/index';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
