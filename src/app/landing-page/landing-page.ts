import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { HeroSectionComponent } from "../components/hero-section.component";
import { AboutSectionComponent } from "../components/about-section.component";
import { ServicesSectionComponent } from "../components/services-section.component";
import { RoomsSectionComponent } from "../components/rooms-section.component";
import { FooterComponent } from "../components/footer.component";
import { StatsSectionComponent } from "../components/stats-section.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ HeroSectionComponent, 
    AboutSectionComponent, 
    ServicesSectionComponent, 
    RoomsSectionComponent, 
    FooterComponent, 
    StatsSectionComponent],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit {
  token: string | null = null;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.token = this.storageService.getToken();
console.log(this.token)
  }
}