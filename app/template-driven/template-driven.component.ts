import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  elements = ["Select", "safety","Testing"]

  form: FormGroup;
  type;
  title;
  date;
  formdata;
  uploadfile;
  drink;
  priv;

  date1 = new Date();
  constructor() { }

  myFunction() {
  var x = document.createElement("INPUT");
    document.body.appendChild(x);
}
  ngOnInit() {

    this.formdata = new FormGroup({
      type: new FormControl(""),
      title: new FormControl("", [Validators.required, Validators.maxLength(5)]),
     // date: new FormControl(this.date1.toISOString().substring(0, 10)),
      date: new FormControl(""),
      uploadfile: new FormControl(""),
      drink: new FormControl(""),
      priv: new FormControl(""),
      
    });

  }
  onClickSubmit(data) {
    this.type = data.type;
    this.title = data.title;
    this.drink = data.drink;
    this.date = data.date;
    this.uploadfile = data.uploadfile;
    this.priv = data.priv;
   

    console.log("heck", this.formdata);
  }

}

