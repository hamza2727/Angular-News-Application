import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NewsApiService } from 'angular-news-api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})


export class DashboardComponent implements OnInit {
  message: string;
  token: string = '';
  headlines = [];


  bbcUrl: any;
  title: any;
  Description: any;
  imageUrl: any;
  Content: any;

  bbcUrl2: any;
  title2: any;
  imageUrl2: any;
  Description2: any;
  Content2: any;

  bbcUrl3: any;
  title3: any;
  imageUrl3: any;
  Description3: any;
  Content3: any;

  bbcUrl4: any;
  title4: any;
  imageUrl4: any;
  Description4: any;
  Content4: any;




  private headList: any[] = [];
  private latestNewsList: any[] = [];


  currentDate = new Date();
  constructor(private dataService: DataService, private newsApiService: NewsApiService, private datePipe: DatePipe, private router: Router) {


  }



  ngOnInit() {


    this.topHeadlines();
    this.everything();
    this.sources();

    this.dataService.currentMessage.subscribe(message => this.headList = message);



  }


  newMessage() {
    debugger;
    this.dataService.changeMessage(this.headList);
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    },
      1);
    setTimeout(() => {
      this.router.navigate(['/panel//newsdetail']);
    },
      1);

  }


  // Method to get Top Headlines from the news api 
  topHeadlines() {

    this.newsApiService.topHeadlines({
      sources: 'bbc-news,the-verge'
    }).subscribe(res => {
      console.clear();
      console.log("Top Head lines are")
      console.log(res)

      debugger;
      let data = res['articles'];
      this.headList = data;

      //For 1st Record 
      this.imageUrl = this.headList[0].urlToImage;
      this.bbcUrl = this.headList[0].url;
      this.title = this.headList[0].title;
      this.Description = this.headList[0].description;
      this.Content = this.headList[0].content;

      //For 2nd Record
      this.imageUrl2 = this.headList[1].urlToImage;
      this.bbcUrl2 = this.headList[1].url;
      this.title2 = this.headList[1].title;
      this.Description2 = this.headList[1].description;
      this.Content2 = this.headList[1].content;

      //For the 3rd Record
      this.imageUrl3 = this.headList[2].urlToImage;
      this.bbcUrl3 = this.headList[2].url;
      this.title3 = this.headList[2].title;
      this.Description3 = this.headList[2].description;
      this.Content3 = this.headList[2].content;

      //For the 4th Record
      this.imageUrl4 = this.headList[3].urlToImage;
      this.bbcUrl4 = this.headList[3].url;
      this.title4 = this.headList[3].title;
      this.Description4 = this.headList[3].description;
      this.Content4 = this.headList[3].content;

    },
      err => {

        console.log("server Error")
      });
  }


  // Method to get Everything from the news api
  everything() {
    this.newsApiService.everything({
      q: 'trump'
    }).subscribe(res => {
      console.log("All the news ")
      console.log(res)

      debugger;
      let data = res;
      this.latestNewsList = data['articles'];



    },
      err => {

        console.log("server Error")
      });
  }

  // Method to get Source From the news api.
  sources() {
    this.newsApiService.sources({
      country: 'us'
    }).subscribe(res => {
      console.log("US news are")
      console.log(res)


      var data = res;
      ;


    },
      err => {

        console.log("server Error")
      });
  }


  getTheBbcNews() {
    debugger;
    window.open(this.bbcUrl);
    window.open("http://www.google.com/");
  }
  getTheBbcNewsForSecond() {
    debugger;
    window.open(this.bbcUrl2);
    window.open("http://www.google.com/");
  }
  getTheBbcNewsForThird() {
    debugger;
    window.open(this.bbcUrl3);
    window.open("http://www.google.com/");
  }
  getTheBbcNewsForFourth() {
    debugger;
    window.open(this.bbcUrl4);
    window.open("http://www.google.com/");
  }
}
