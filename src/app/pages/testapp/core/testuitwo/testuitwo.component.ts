/**
 * Created by: Ashwini Agre
 * Date: 19/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testuitwo',
  templateUrl: 'testuitwo.component.html'
})
export class TestuitwoComponent implements OnInit{
  testuitwoModel:TestuitwoModel;
 
  constructor(private http: HttpClient) {
    this.testuitwoModel=new TestuitwoModel();
       }
  onSingleSelect_drop(eventData:any){ 
let response: any;
this.http.get('/findAll').subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.dropBindResponse_1(response);
});
}
dropBindResponse_1(response: any){
 } 
  ngOnInit(){
  }
 

   
}
export class TestuitwoModel{
  drop: string; }
