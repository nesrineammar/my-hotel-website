import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "about-section",
  template: `
    <section class="about-section">
      <div class="about-container">
        <header class="section-header">
          <div class="section-title-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4428e26d91999efaf8461a87707d388883c32adc?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="section-divider"
              alt=""
            />
            <h2 class="section-title">About Us</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4428e26d91999efaf8461a87707d388883c32adc?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
              class="section-divider"
              alt=""
            />
          </div>
        </header>
        <div class="about-content">
          <article class="history-article">
            <div class="image-container">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8371c22e27778a4b765c87f860782e65a9322fce?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="about-image"
                alt="Hotel history"
              />
            </div>
            <div class="text-content">
              <h3 class="article-title">
                History of <span class="title-neutral">Just</span
                ><span class="title-accent">Stay</span>
              </h3>
              <div class="article-text">
                <p class="primary-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque assumenda incidunt id cum. Fugiat repellat cumque
                  delectus, at ipsum ad iure explicabo perferendis. If you're
                  still reading this, congrats, you're officially a masochist.
                </p>
                <p class="secondary-text">
                  Autem temporibus, neque voluptas officiis molestiae. At vero
                  eos et accusamus et iusto odio dignissimos ducimus. But hey,
                  at least you're not stuck in traffic, or worse, listening to a
                  never-ending sales pitch, right?
                </p>
              </div>
              <button class="outline-button">
                <span class="button-text">Read More</span>
              </button>
            </div>
          </article>
          <article class="why-choose-article">
            <div class="text-content">
              <h3 class="article-title">Why Choose us?</h3>
              <div class="article-text">
                <p class="primary-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque assumenda incidunt id cum. Fugiat repellat cumque
                  delectus, at ipsum ad iure explicabo perferendis. Why do we
                  press harder on the remote control when we know the batteries
                  are weak?
                </p>
                <p class="secondary-text">
                  Autem temporibus, neque voluptas officiis molestiae. At vero
                  eos et accusamus et iusto odio dignissimos ducimus. And why is
                  it that the one time you need a pen, it's always out of ink?
                </p>
              </div>
              <button class="outline-button">
                <span class="button-text">Read More</span>
              </button>
            </div>
            <div class="image-container">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8371c22e27778a4b765c87f860782e65a9322fce?placeholderIfAbsent=true&apiKey=9901b5347b654337a3b2993ebfdc3c8e"
                class="about-image"
                alt="Why choose us"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./about-section.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class AboutSectionComponent {}
