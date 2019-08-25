import {Component} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent{
  
  blogtext:string;
  blogList:Array<string>=[];
  
  constructor() { }
  i=1;
  submitBlog():void{

    if(!this.blogtext){
      return;
    }

    this.blogList.push(this.blogtext);
    this.blogtext = '';
  }
  deleteBlog(item:number){
    this.blogList.splice(item,1);
    //this.blogList.pop(item);
  }
  
}
