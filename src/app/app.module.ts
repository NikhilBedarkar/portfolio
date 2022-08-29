import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdComponentsModule } from './md-components.module';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { IntroComponent } from './intro/intro.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { DetailsService } from './service/details.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CertificationsComponent,
    ContactmeComponent,
    PortfolioComponent,
    SkillsComponent,
    IntroComponent,
   MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdComponentsModule,
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
