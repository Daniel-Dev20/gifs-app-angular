import { Component, OnInit } from '@angular/core';
import { GifService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public gifList:string[] = [];
  constructor(private gifsService:GifService) { }
  get gifsTags(){
    return this.gifsService.tagsGif;
  }
  ngOnInit(): void {

    console.log(this.gifList);
    
  }

}
