import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../service/details.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects!:any [];
  constructor(detailsService:DetailsService) {
    this.projects=detailsService.projects;
   }

  ngOnInit(): void {
  }

  openCertificationTab(url:string){
    window.open( url, '_blank');
  }
}
