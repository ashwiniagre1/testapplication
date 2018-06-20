/**
 * Created by: Ashwini Agre
 * Date: 19/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testthree',
  templateUrl: 'testthree.component.html'
})
export class TestthreeComponent implements OnInit{
  testthreeModel:TestthreeModel;
 
  constructor(private http: HttpClient) {
    this.testthreeModel=new TestthreeModel();
       }
  onClick_btn(eventData:any){ 
let response: any;
this.http.get('/findAll').subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.btnBindResponse_1(response);
});
}
btnBindResponse_1(response: any){
 } 
  ngOnInit(){
  }
 

   
}
export class TestthreeModel{
 }
