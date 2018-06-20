/**
 * Created by: Ashwini Agre
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testuione',
  templateUrl: 'testuione.component.html'
})
export class TestuioneComponent implements OnInit{
  testuioneModel:TestuioneModel;
 
  constructor(private http: HttpClient) {
    this.testuioneModel=new TestuioneModel();
       }
  ngOnInit(){
  }
 

   
}
export class TestuioneModel{
  FirstTextInput: string;  EmailId: string;  CheckBox: string;  SecondTextInput: string; }
