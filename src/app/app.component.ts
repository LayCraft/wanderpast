import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wanderpast';
  showInstallMessage = false;

  constructor() {
    this.iosCheck();
  }

  iosCheck(): void {
    // The overall logic here is to show the install message
    // when running iOS
    // is this running in a standalone window navigator?
    // is this running in a PWA on ios?

    // Detects if device is on iOS. This is true in the desktop simulator
    // This is merely a user agent check.
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    // is this running in a standalone instance. (is true on iOs but false in desktop using simulator)
    const isStandaloneWindowNavigator = 'standalone' in window.navigator;
    // is this running in a standalone web app window on iOS?
    const isStandaloneWindowMatchMedia = window.matchMedia('(display-mode: standalone)').matches;

    // Checks if should display install popup notification:
    this.showInstallMessage = isIos() && !(isStandaloneWindowNavigator && isStandaloneWindowMatchMedia);
  }
}
