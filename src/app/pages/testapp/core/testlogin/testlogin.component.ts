/**
 * Created by: Ashwini Agre
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testlogin',
  templateUrl: 'testlogin.component.html'
})
export class TestloginComponent implements OnInit{
  testloginModel:TestloginModel;
 
  constructor(private http: HttpClient) {
    this.testloginModel=new TestloginModel();
       }
  ngOnInit(){
  }
 

   
}
export class TestloginModel{
  EmailId: string;  Password: string;  confirmpassword: string; }
