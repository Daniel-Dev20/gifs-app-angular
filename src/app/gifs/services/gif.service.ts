import { Injectable } from '@angular/core'


@Injectable({
    providedIn: 'root'
})

export class GifService {
    private _tagsGifs: string[] = [];

    get tagsGif() {
        return [...this._tagsGifs]
    }

    searchTag = (tag:string) => {
        this._tagsGifs.unshift(tag);
        console.log(this._tagsGifs);
        
    }
}