import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { MainNavComponent } from './main-nav/main-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  exports : [
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatExpansionModule,
   MatProgressBarModule,
   MatFormFieldModule,
   MatInputModule,
   MatCardModule,
   MatChipsModule,
  ]
})
export class MdComponentsModule { }
