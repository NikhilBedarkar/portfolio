import { Component, OnInit } from '@angular/core';
import { faLinkedin,faGithub,faHackerrank,faCodepen } from '@fortawesome/free-brands-svg-icons';
import { UtilService } from '../service/util.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  faLinkedin=faLinkedin;
  faGithub=faGithub;
  faCodepen=faCodepen;
  faHackerrank=faHackerrank;
  constructor(private utilService:UtilService) {
    
   }

  ngOnInit(): void {
  }

  openNewTab(url:string){
    this.utilService.openInNewTab(url)
  }

}
