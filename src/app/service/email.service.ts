import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(e: Event):boolean{
    console.log(e.target);
    let status=false;
    emailjs.sendForm('service_vw1ddeo', 'template_vx10kb9', e.target as HTMLFormElement, 'BRpGkFGI-4qd4J-ed')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        status=true;
      }, (error) => {
        console.log(error.text);
      });
      return status;
    }
}
