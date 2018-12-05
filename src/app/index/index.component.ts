import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  constructor() {}

  public isStudents = true;
  public isClasses = false;
  public isAddStudent = false;
  public isAddClass = false;

  ngOnInit() {
  }

  loadStudents(){
    this.isStudents = true;
    this.isClasses = false;
    this.isAddStudent = false;
    this.isAddClass = false
  }

  loadClasses(){
    this.isStudents = false;
    this.isClasses = true;
    this.isAddStudent = false;
    this.isAddClass = false
  }

  loadAddStudent(){
    this.isStudents = false;
    this.isClasses = false;
    this.isAddStudent = true;
    this.isAddClass = false
  }

  loadAddClass(){
    this.isStudents = false;
    this.isClasses = false;
    this.isAddStudent = false;
    this.isAddClass = true
  }
}
