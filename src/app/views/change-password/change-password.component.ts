import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @Output() onConfirmPasswordChange = new EventEmitter();
  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      codigo:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  btnConfirmClick() { }

}
