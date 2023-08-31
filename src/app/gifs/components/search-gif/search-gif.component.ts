import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {

  @ViewChild('gif') public gifValue!:ElementRef<HTMLInputElement>;
  constructor(private gifsService:GifService) { }

  ngOnInit(): void {
  }

  searchGif = () => {
    const gifValueInput = this.gifValue.nativeElement.value;
    this.gifsService.searchTag(gifValueInput);
    this.gifValue.nativeElement.value = '';
  }

}
