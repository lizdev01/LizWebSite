import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RendersComponent } from './renders/renders.component';
import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './education/education.component';
import { ReformasComponent } from './reformas/reformas.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AbotuComponent } from './abotu/abotu.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ExperienceComponent } from './experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    RendersComponent,
    CvComponent,
    EducationComponent,
    ReformasComponent,
    DocumentacionComponent,
    AboutmeComponent,
    WelcomeComponent,
    AbotuComponent,
    ContactComponent,
    SkillsComponent,
    ProfilesComponent,
    ExperienceComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
