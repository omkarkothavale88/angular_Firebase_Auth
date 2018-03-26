import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
//import {BusyModule} from 'angular2-busy';
import {TechsModule} from './techs';
import {AngularFireModule} from 'angularfire2';
import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {loginComponent} from './login/login';
import {HomeComponent} from './home/home';
import{environment} from '../environments/environment';
import {angularFireDatabseModule} from 'angularfire2/database';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    TechsModule,
    AngularFireModule.initializeApp(environment.firebase),
      angularFireDatabseModule
  //  BusyModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    loginComponent,
    FooterComponent,
    HomeComponent
  ],
    providers: [loginComponent],
  bootstrap: [RootComponent]
})
export class AppModule {}
