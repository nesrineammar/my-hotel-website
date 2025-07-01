import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "rooms-section",
  template: `
    <section class="rooms-section">
      <div class="rooms-container">
        <header class="section-header">
          <div class="section-title-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/563bc90489b8dd388b36a86a3fafc295c764d890?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="section-divider"
              alt=""
            />
            <h2 class="section-subtitle">Our Rooms</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/563bc90489b8dd388b36a86a3fafc295c764d890?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="section-divider"
              alt=""
            />
          </div>
          <h3 class="section-main-title">
            Explore Our <span class="title-accent">Rooms</span>
          </h3>
        </header>
        <div class="rooms-grid">
          <article class="room-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f82bc7fc8406ee4e640c5c709526dfd5fe0a8a?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="room-image"
              alt="Junior Suite"
            />
            <div class="room-info">
              <h4 class="room-title">Junior Suite</h4>
              <p class="room-price">$150.00 / per night</p>
            </div>
          </article>
          <article class="room-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0318f8777d5f29c57865c705126844f922a07e56?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="room-image"
              alt="Executive Suite"
            />
            <div class="room-info">
              <h4 class="room-title">Executive Suite</h4>
              <p class="room-price">$250.00 / per night</p>
            </div>
          </article>
          <article class="room-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bbf5e0b3c1935d59b11007cdc73fdd421431bbd?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="room-image"
              alt="Super Deluxe"
            />
            <div class="room-info">
              <h4 class="room-title">Super Deluxe</h4>
              <p class="room-price">$350.00 / per night</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./rooms-section.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class RoomsSectionComponent {}
