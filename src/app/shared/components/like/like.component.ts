import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
@Input() likecounts! : number;
@Input() islike!:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    if(this.islike){
      this.islike=!this.islike;
      this.likecounts -=1;
    }else{
      this.islike=!this.islike;
      this.likecounts +=1;
    }
  }

}
