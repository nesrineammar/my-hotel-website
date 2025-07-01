import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroSectionComponent } from "./hero-section.component";
import { AboutSectionComponent } from "./about-section.component";
import { StatsSectionComponent } from "./stats-section.component";
import { RoomsSectionComponent } from "./rooms-section.component";
import { ServicesSectionComponent } from "./services-section.component";
import { TestimonialsComponent } from "./testimonials.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: "hotel-landing",
  template: `
    <main class="hotel-landing">
      <hero-section></hero-section>
      <about-section></about-section>
      <stats-section></stats-section>
      <rooms-section></rooms-section>
      <services-section></services-section>
      <testimonials></testimonials>
      <footer-section></footer-section>
    </main>
  `,
  styleUrls: ["./hotel-landing.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    StatsSectionComponent,
    RoomsSectionComponent,
    ServicesSectionComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
})
export class HotelLandingComponent {}
