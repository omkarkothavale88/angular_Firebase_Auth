import {Component, Input,Injectable } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { firebase } from '@angular/firebase';
@Component({
  selector: 'fountain-tech',
  template: require('./login.html')
})

@Injectable()
export class loginComponent {
constructor(private router: Router){}
username :any;
buttonName:string;
submitted:boolean=false;
    password:any;
    itemShow:boolean=false;
    showbackgroundColor=false;
    menus=[{name:"Social "},{name:"Contact"},{name:"About"}];
    data=[{name:"This is home",age:30},{name:"This is profile",age:40},{name:"This is logout",age:10},{name:"This is Info",age:20},{name:"This is Contacts",age:10},{name:"This is History",age:90},{name:"This is map",age:30}];

    loginClick:boolean = false;
    forgotPassClick:boolean = false;
    RegisterClick :boolean = false;
    loginSwitch:string;

    ngOnInit() {

      this.buttonName='submit';
        this.RegisterClick = false;
        this.loginClick = true;
        this.forgotPassClick = true;
      }

submit(form:NgForm){

  this.submitted=true;
  if(form.valid){
      localStorage.setItem('username', this.username);
       this.router.navigate(['/home']);
     }
}

    // var firebase = require("firebase/app");
    public OnLogin(loginName: string){

      if(loginName=='register'){

        this.loginSwitch='register';
        this.forgotPassClick = true;
        this.RegisterClick = true;
            this.loginClick = false;
            this.buttonName='register';
    }
    else if(loginName=='login'){

              this.loginSwitch='login';
              this.forgotPassClick = true;
              this.RegisterClick = false;
              this.loginClick = true;
              this.buttonName='login';
    }
  }

  public OnForgotPassword(loginName: string){

console.log("username",this.username);
    if(loginName=='ForgotPassword'){

      this.loginSwitch='forgotPassword';
  }


  this.loginClick = true;
  this.RegisterClick = true;
  this.forgotPassClick = false;
  this.buttonName='submit';
}


  public OnRegister(){
    console.log('in OnRegister');
  this.RegisterClick = false;
  this.forgotPassClick = true;
  this.loginClick = true;
    this.buttonName='Register';
}


}
