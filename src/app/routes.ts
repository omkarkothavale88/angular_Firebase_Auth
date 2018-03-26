import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main';
import {loginComponent} from './login/login';
import {HomeComponent} from './home/home';
@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
     path: 'login',
    component: loginComponent
  },
  {
     path: 'home',
    component: HomeComponent
    }
];

export const routing = RouterModule.forRoot(routes);
