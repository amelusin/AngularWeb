import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProfilepicComponent } from './profilepic/profilepic.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectsComponent } from './proyects/proyects.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ProfilepicComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BannerComponent,
    ProfilepicComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent
  ]
})
export class SharedModule { }
