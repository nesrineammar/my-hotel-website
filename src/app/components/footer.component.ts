import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "footer-section",
  template: `
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-logo">
            Just<span class="logo-accent">Stay</span>
          </h3>
          <div class="footer-info">
            <p class="footer-description">
              Recusandae quos nesciunt veniam eum quia
            </p>
            <p class="footer-email">shaikhsaad256&#65;gmail.com</p>
          </div>
        </div>
        <nav class="footer-nav">
          <h4 class="footer-nav-title">Quick Links</h4>
          <ul class="footer-nav-list">
            <li><a href="/" class="footer-nav-link">Home</a></li>
            <li><a href="#" class="footer-nav-link">About Us</a></li>
            <li><a href="#" class="footer-nav-link">Rooms</a></li>
            <li><a href="#" class="footer-nav-link">Services</a></li>
          </ul>
        </nav>
        <nav class="footer-nav">
          <h4 class="footer-nav-title">Quick Links</h4>
          <ul class="footer-nav-list">
            <li><a href="#" class="footer-nav-link">Home</a></li>
            <li><a href="#" class="footer-nav-link">About Us</a></li>
            <li><a href="#" class="footer-nav-link">Rooms</a></li>
            <li><a href="#" class="footer-nav-link">Services</a></li>
          </ul>
        </nav>
        <nav class="footer-nav">
          <h4 class="footer-nav-title">Quick Links</h4>
          <ul class="footer-nav-list">
            <li><a href="#" class="footer-nav-link">Home</a></li>
            <li><a href="#" class="footer-nav-link">About Us</a></li>
            <li><a href="#" class="footer-nav-link">Rooms</a></li>
            <li><a href="#" class="footer-nav-link">Services</a></li>
          </ul>
        </nav>
        <nav class="footer-nav">
          <h4 class="footer-nav-title">Quick Links</h4>
          <ul class="footer-nav-list">
            <li><a href="#" class="footer-nav-link">Home</a></li>
            <li><a href="#" class="footer-nav-link">About Us</a></li>
            <li><a href="#" class="footer-nav-link">Rooms</a></li>
            <li><a href="#" class="footer-nav-link">Services</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {}
