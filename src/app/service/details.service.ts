import { Injectable } from '@angular/core';
import { certifications } from './portfolioDetails';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

get certification(){
  return certifications
}

}
