import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  wrongPassword:boolean=false;
  submitForm(passwordGiven:HTMLInputElement):void{
    this.wrongPassword=false;
    if(passwordGiven.value==""){
      alert('Logged in successfully ');
    }
    else{
      this.wrongPassword=true;
    }
  }
  changePassword(newPassword:HTMLInputElement,reNewPassword:HTMLInputElement):void{
    if(newPassword.value==reNewPassword.value){
      alert('Password has been reset successfully !!!')
      this.wrongPassword=true;
    }
    else{
      alert('Input fileds mismatched');
    }
  }

}