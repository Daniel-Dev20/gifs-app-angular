import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchGifComponent } from './components/search-gif/search-gif.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchGifComponent,
    GifsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomePageComponent]
})
export class GifsModule { }
