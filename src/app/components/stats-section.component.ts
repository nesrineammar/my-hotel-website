import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "stats-section",
  template: `
    <section class="stats-section">
      <div class="stat-item">
        <p class="stat-label">Years of Service</p>
        <span class="stat-number">8</span>
      </div>
      <div class="stat-item">
        <p class="stat-label">Sq. Meter Area</p>
        <span class="stat-number">459</span>
      </div>
      <div class="stat-item">
        <p class="stat-label">Nice Rooms</p>
        <span class="stat-number">50</span>
      </div>
      <div class="stat-item">
        <p class="stat-label">Happy Visitors</p>
        <span class="stat-number">3786</span>
      </div>
    </section>
  `,
  styleUrls: ["./stats-section.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class StatsSectionComponent {}
