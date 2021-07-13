import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.css']
})
export class CreateToDoComponentComponent implements OnInit {
  form: FormGroup;
  formValue: any;
  isValidated = false;
todoTaskarraylist:any=[
]
  constructor(private fb: FormBuilder) {}
  signals = [
    'Yes','No'  
  ];
  default: string = '';

  
  ngOnInit() {
  
    this.form = new FormGroup({
      taskName: new FormControl("",Validators.required),
      taskDesc: new FormControl("",Validators.required),
      isRepeating: new FormControl('',Validators.required),
    });
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.register()
      }
    })
  }

register(){
  this.formValue = this.form.value
  this.todoTaskarraylist = [...this.todoTaskarraylist,this. formValue];

  this.form.reset();
  this.form.controls['isRepeating'].setValue(this.default, {onlySelf: true});

}

}
