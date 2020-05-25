import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IosPopupComponent } from './ios-popup/ios-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wanderpast';

  constructor(
    private snackBarService: MatSnackBar
  ) {
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
    const showInstallMessage = isIos() && !(isStandaloneWindowNavigator && isStandaloneWindowMatchMedia);

    // if the user is on an iOs device we show them an install message for 10 seconds
    if (showInstallMessage) {
      this.snackBarService.openFromComponent(IosPopupComponent, {
        // display for 10 seconds
        duration: 10 * 1000,
      });
    }
  }
}
