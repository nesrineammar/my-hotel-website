import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "testimonials",
  template: `
    <section class="testimonials-section">
      <div class="testimonials-container">
        <header class="section-header">
          <div class="section-title-wrapper">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/563bc90489b8dd388b36a86a3fafc295c764d890?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e" class="section-divider" alt="" />
            <h2 class="section-subtitle">Testimonial</h2>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/563bc90489b8dd388b36a86a3fafc295c764d890?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e" class="section-divider" alt="" />
          </div>
          <h3 class="section-main-title">
            What People <span class="title-accent">Say?</span>
          </h3>
        </header>
        <div class="testimonials-grid">
          <article class="testimonial-card">
            <div class="testimonial-content">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58a14936f43699758c1b6a42343f710e931c164?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e" class="quote-icon" alt="Quote" />
              <p class="testimonial-text">
                Nobis voluptatem magni doloribus voluptate culpa dolor est neque
              </p>
            </div>
            <div class="testimonial-author">
              <h4 class="author-name">Rita O'Conner</h4>
              <p class="author-email">Sandrine.Luettgen&#65;gmail.com</p>
            </div>
          </article>
          <article class="testimonial-card">
            <div class="testimonial-content">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f4e6b9c824f0b4f0b293f5a82b3f10fcdcec567?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e" class="quote-icon" alt="Quote" />
              <p class="testimonial-text">
                Nobis voluptatem magni doloribus voluptate culpa dolor est neque
              </p>
            </div>
            <div class="testimonial-author">
              <h4 class="author-name">Woodrow McCullough</h4>
              <p class="author-email">Idell.Hoppe86&#65;yahoo.com</p>
            </div>
          </article>
          <article class="testimonial-card">
            <div class="testimonial-content">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba923b1bd9be58d38c8634417ca7906d616374bb?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e" class="quote-icon" alt="Quote" />
              <p class="testimonial-text">
                Nobis voluptatem magni doloribus voluptate culpa dolor est neque
              </p>
            </div>
            <div class="testimonial-author">
              <h4 class="author-name">Veronica Hessel</h4>
              <p class="author-email">Valentin.Homenick&#65;gmail.com</p>
            </div>
          </article>
          <article class="testimonial-card">
            <div class="testimonial-content">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58a14936f43699758c1b6a42343f710e931c164?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e" class="quote-icon" alt="Quote" />
              <p class="testimonial-text">
                Nobis voluptatem magni doloribus voluptate culpa dolor est neque
              </p>
            </div>
            <div class="testimonial-author">
              <h4 class="author-name">George Heaney</h4>
              <p class="author-email">Liliana.Howell85&#65;hotmail.com</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./testimonials.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class TestimonialsComponent {}
