import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var $:any;

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

}
