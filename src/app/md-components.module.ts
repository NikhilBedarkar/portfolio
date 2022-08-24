import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  exports : [
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatExpansionModule,
   MatProgressBarModule
  ]
})
export class MdComponentsModule { }
