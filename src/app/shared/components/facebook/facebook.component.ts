import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
@Input() likecounts! : number;
@Input() islike! : boolean;
  constructor() { }

  ngOnInit(): void {
  }
  // onthumb(){
  //   if(this.islike){
  //     this.islike=!this.islike;
  //     this.likecounts +=1;
  //   }else{
  //     this.islike=!this.islike;
  //     this.likecounts -=1;
  //   }
  // }
  onthumbup(){
    if(this.islike){
      this.islike=this.islike;
      this.likecounts +=1;
    }else{
      this.islike=!this.islike;
    }
  }
  onthumbdown(){
    this.islike=!this.islike;
    this.likecounts -=1;
  }
}