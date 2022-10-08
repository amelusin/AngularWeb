import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProfilepicComponent } from './profilepic/profilepic.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ProfilepicComponent,
    AboutmeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BannerComponent,
    ProfilepicComponent,
    AboutmeComponent
  ]
})
export class SharedModule { }
