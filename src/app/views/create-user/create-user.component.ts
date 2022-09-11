import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Output() onConfirmPasswordChange = new EventEmitter();
  
  formGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.formGroup = formBuilder.group({
      codigo:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
