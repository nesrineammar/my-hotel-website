import { Component } from '@angular/core';
import { HeroSectionComponent } from "../components/hero-section.component";
import { AboutSectionComponent } from "../components/about-section.component";
import { ServicesSectionComponent } from "../components/services-section.component";
import { RoomsSectionComponent } from "../components/rooms-section.component";
import { FooterComponent } from "../components/footer.component";
import { StatsSectionComponent } from "../components/stats-section.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSectionComponent, AboutSectionComponent, ServicesSectionComponent, RoomsSectionComponent, FooterComponent, StatsSectionComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
