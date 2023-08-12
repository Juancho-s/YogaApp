import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent {
  isDarkThemeActive = true;
  // @Inject(DOCUMENT) private document: Document;
  toggleMode() {
    this.isDarkThemeActive = !this.isDarkThemeActive;
    console.log(this.isDarkThemeActive);
    const body = document.getElementsByTagName('body')[0];
    if (this.isDarkThemeActive) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  }
}
