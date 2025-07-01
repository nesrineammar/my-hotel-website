import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "services-section",
  template: `
    <section class="services-section">
      <div class="services-container">
        <header class="section-header">
          <div class="section-title-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/563bc90489b8dd388b36a86a3fafc295c764d890?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="section-divider"
              alt=""
            />
            <h2 class="section-subtitle">Our Services</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/563bc90489b8dd388b36a86a3fafc295c764d890?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="section-divider"
              alt=""
            />
          </div>
          <h3 class="section-main-title">
            Explore Our <span class="title-accent">Services</span>
          </h3>
        </header>
        <div class="services-grid">
          <article class="service-card">
            <div class="service-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65168054745245feff81fc5af238355635f4a005?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="service-icon"
                alt="Rooms & Apartment"
              />
              <div class="service-text">
                <h4 class="service-title">Rooms & Appartment</h4>
                <p class="service-description">
                  Figma ipsum component variant main layer.
                </p>
              </div>
            </div>
          </article>
          <article class="service-card service-card-featured">
            <div class="service-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01f8a631f21792bf332121e79e51f7c97cdde27f?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="service-icon"
                alt="Sports & Gaming"
              />
              <div class="service-text">
                <h4 class="service-title">Sports & Gaming</h4>
                <p class="service-description">
                  Figma ipsum component variant main layer.
                </p>
              </div>
            </div>
          </article>
          <article class="service-card">
            <div class="service-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eea19be3d8eb2f7647d88d70000e6d684015aff?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="service-icon"
                alt="Food & Restaurant"
              />
              <div class="service-text">
                <h4 class="service-title">Food & Resturant</h4>
                <p class="service-description">
                  Figma ipsum component variant main layer.
                </p>
              </div>
            </div>
          </article>
          <article class="service-card">
            <div class="service-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3d60b3cfc3d03862c59946d1c54f2e026f68f5?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="service-icon"
                alt="Spa & Fitness"
              />
              <div class="service-text">
                <h4 class="service-title">Spa & Fitness</h4>
                <p class="service-description">
                  Figma ipsum component variant main layer.
                </p>
              </div>
            </div>
          </article>
          <article class="service-card">
            <div class="service-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74cd0ffdfba059812dc55727895dac518d365abe?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="service-icon"
                alt="Event & Party"
              />
              <div class="service-text">
                <h4 class="service-title">Event & Party</h4>
                <p class="service-description">
                  Figma ipsum component variant main layer.
                </p>
              </div>
            </div>
          </article>
          <article class="service-card">
            <div class="service-content">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a523c393a8ea8c40c6af3b544fd890740c21e048?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="service-icon"
                alt="GYM & Yoga"
              />
              <div class="service-text">
                <h4 class="service-title">GYM & Yoga</h4>
                <p class="service-description">
                  Figma ipsum component variant main layer.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./services-section.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class ServicesSectionComponent {}
