import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'',component: IntroComponent},
  {path:'about',component: AboutComponent},
  {path:'skills',component: SkillsComponent},
  {path:'certifications',component: CertificationsComponent},
  {path:'portfolio',component: PortfolioComponent},
  {path:'contact',component: ContactmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
