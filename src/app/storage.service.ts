import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({ providedIn: 'root' })
export class StorageService {
  private token: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.syncToken();
  }

  private syncToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem('token');
    }
  }

  getToken(): string | null {
    this.syncToken(); // Synchronisation à chaque accès
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }
}