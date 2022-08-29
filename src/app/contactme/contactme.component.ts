import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  done: boolean = false;
  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
  }

  sendMail(e:Event){
    this.done=this.emailService.sendEmail(e);
  }
}
