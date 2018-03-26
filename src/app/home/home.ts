import {Component, Input} from '@angular/core';
import {loginComponent} from '../login/login'
import {angularFireDatabseModule} from 'angularfire2/database'



@Component({
  selector: 'fountain-tech',
  template: require('./home.html')
})
export class HomeComponent {
un:any;
branches:any[];
constructor(db:angularFireDatabseModule){
this.un=localStorage.getItem('username');
console.log(this.un);
db.list('/branches').subscribe(branches => {
  this.branches=branches;
  console.log(this.branches);
});


}

}
