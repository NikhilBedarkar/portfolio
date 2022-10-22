import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../service/details.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  panelOpenState: boolean = false;
  certification;
  constructor(detailsService:DetailsService) { 
    this.certification=detailsService.certification
  }

  ngOnInit(): void {
  }

  openCertificationTab(url:string){
    window.open( url, '_blank');
  }

}
