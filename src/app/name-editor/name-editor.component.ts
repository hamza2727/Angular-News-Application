import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';

@Component({  
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {


  title = 'Angular';
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService:DataService) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
    id:['',Validators.required],
      name: ['', Validators.required ],
      salary: ['', Validators.required ],
      age: ['', Validators.required ],
    
   });
 }

  ngOnInit() {}

  onSubmit() {
    debugger

    this.dataService.postUser(this.angForm.value).subscribe(res => {
    
      if(res['status']==401){
       console.log("Failed")
      }else{
      console.log("Success")
      }
    },
      err => {
       console.log("Error")
      });

  }
}
