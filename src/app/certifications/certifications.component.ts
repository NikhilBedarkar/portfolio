import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../service/details.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  panelOpenState: boolean = false;
  certification;
  constructor(detailsService:DetailsService,private utilService:UtilService) { 
    this.certification=detailsService.certification
  }

  ngOnInit(): void {
  }

  openCertificationTab(url:string){
    this.utilService.openInNewTab(url);
  }

}
