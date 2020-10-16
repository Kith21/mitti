
import { MapsService } from './maps.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import * as $ from 'jquery';
import {  FormBuilder } from '@angular/forms';
import { Component, HostListener } from '@angular/core';
import { inside } from '@syncfusion/ej2-angular-charts';
import { ObjectUnsubscribedError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  
 
    
  public constructor(private router: Router,public _httpService:MapsService ) {
    
 

  }

  public ngOnInit() {
    
    
  /* Formatting function for row details - modify as you need */
  $(document).ready(function () {  
    $('tr.parent')  
        .css("cursor", "pointer")  
        .attr("title", "Click to expand/collapse")  
        .click(function () {  
            $(this).siblings('.child-' + this.id).toggle();  
        });  
    $('tr[@class^=child-]').hide().children('td');  
});  
  
  }   

}