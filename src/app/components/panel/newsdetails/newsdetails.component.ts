import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
 
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
  private latestNewsList: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(res => {
      console.clear();
      console.log("List coming from the dasboard")
      console.log(res)

      debugger;
      let data = res;
      this.latestNewsList = data['articles'];



    },
      err => {

        console.log("server Error")
      });
     
    
    debugger;

   
  }
 
  //this.bankReconcilationService.selectReconcile(this.unSelectedRow);  //sender side

}



