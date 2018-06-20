/**
 * Created by: Ashwini Agre
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testui',
  templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit{
  testuiModel:TestuiModel;
        radiogroupData:any; 
  constructor(private http: HttpClient) {
    this.testuiModel=new TestuiModel();
     	 	this.radiogroupData={"data":[{"type":"IT","typeId":"1"},{"type":"Operation","typeId":"2"}]};
	  }
  input_type(eventData:any){ 
let response: any;
this.http.get('/findAll').subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.typeBindResponse_1(response);
});
}
typeBindResponse_1(response: any){
this.testuiModel.dep =response.depName; 

 } 
  ngOnInit(){
 	  }
 	 	

   
}
export class TestuiModel{
  fname: string;  lName: string;  type: string;  dep: string; }
