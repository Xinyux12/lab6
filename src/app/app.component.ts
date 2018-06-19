import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Sophie's App";
  name= 'Ayesha!';
  results1:any;
  results2:any;
  results3:any;
  
  
  
 private RESTUrl1: string= "/assets/example_1.json";
        RESTUrl2: string= "/assets/example_2.json";
        RESTUrl3: string= "/assets/example_3.json";
        

 constructor(private http: HttpClient) {}
 
 ngOnInit(){
     
    var res= this.http.get(this.RESTUrl1).subscribe(results1 => this.results1 = results1);
    var res2= this.http.get(this.RESTUrl2).subscribe(results2 => this.results2 = results2);
    var res3= this.http.get(this.RESTUrl3).subscribe(results3 => this.results3 = results3);
    
 }
 
   
}
