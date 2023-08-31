import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {

  @ViewChild('gif') public gifValue!:ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
  }

  searchGif = () => {
    const gifValueInput = this.gifValue.nativeElement.value;
    console.log(gifValueInput)
  }

}
