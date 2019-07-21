import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderMobileComponent } from './app-header-mobile/app-header-mobile.component';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { CategoriesComponent } from './app-header-mobile/categories/categories.component';
import { CustomAutoFocusDirective } from './custom-auto-focus.directive';
import { BottomNavComponent } from './app-header-mobile/bottom-nav/bottom-nav.component';
import { DesktopComponent } from './desktop/desktop.component';
import { HomeComponent } from './desktop/home/home.component';
import { LoginComponent } from './desktop/login/login.component';
import { EmailLoginComponent } from './desktop/login/email-login/email-login.component';
import { LoginMobileComponent } from './app-header-mobile/login-mobile/login-mobile.component';
import { EmailLoginMobileComponent } from './app-header-mobile/login-mobile/email-login-mobile/email-login-mobile.component';
import { UserProfileComponent } from './desktop/user-profile/user-profile.component';
import { MatInputModule,MatProgressSpinnerModule  } from "@angular/material";



@NgModule({  
  declarations: [
    AppComponent,
    HeaderComponent,
    AppHeaderMobileComponent,
    CategoriesComponent,
    CustomAutoFocusDirective,
    BottomNavComponent,
    DesktopComponent,
    HomeComponent,
    LoginComponent,
    EmailLoginComponent,
    LoginMobileComponent,
    EmailLoginMobileComponent,
    UserProfileComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
