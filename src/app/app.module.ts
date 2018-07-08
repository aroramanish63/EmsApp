import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppGlobals } from './app.globals';
import { AuthGuard } from './_guards/auth.guard';



import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    PagecontentComponent,
    LoginComponent,
    HomeComponent,
    DynamicMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppGlobals,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
