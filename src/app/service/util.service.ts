import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  openInNewTab(url:string){
    window.open( url, '_blank');
  }
}
