import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "hero-section",
  template: `
    <section class="hero-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca69128072102b34298c633be709369184108e9?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
        class="hero-background"
        alt="Hotel background"
      />
      <div class="hero-content">
        <header class="main-header">
          <h1 class="logo">Just<span class="logo-accent">Stay</span></h1>
          <nav class="main-navigation">
            <a href="/" class="nav-link nav-link-active">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="#" class="nav-link">Rooms</a>
            <a href="#" class="nav-link">Services</a>
            <a href="#" class="nav-link">Contact</a>
          </nav>
          <button class="logout-button">Logout</button>
        </header>
        <div class="hero-main">
          <div class="hero-text">
            <p class="welcome-text">Welcome To</p>
            <h2 class="main-title">
              Hotel Just<span class="title-accent">Stay</span> Ahmedabad India
            </h2>
          </div>
          <p class="hero-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            maxime praesentium Why did the scarecrow win an award? Because he
            was outstanding in his field. Lorem ipsum
          </p>
          <div class="hero-buttons">
            <button class="primary-button">
              <span class="button-text">Book Now</span>
            </button>
            <button class="secondary-button">
              <span class="button-text">Explore More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./hero-section.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class HeroSectionComponent {}
