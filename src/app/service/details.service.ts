import { Injectable } from '@angular/core';
import { certifications } from './portfolioDetails';
import { projectsToDisplay } from './portfolioDetails';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

get certification(){
  return certifications
}

get projects(){
  return projectsToDisplay;
}



}
