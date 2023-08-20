import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent {
  darkMode!: boolean;

  constructor() {}

  ngOnInit() {
    var x = localStorage.getItem('dark_mode');
    var x2: boolean = x ? JSON.parse(x) : false;
    this.darkMode = x2;
    console.log('valor del : ', this.darkMode);
    var body = document.getElementsByTagName('body')[0];
    if (this.darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  darkTheme() {
    this.darkMode = !this.darkMode;
    const body = document.getElementsByTagName('body')[0];
    if (this.darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('dark_mode', JSON.stringify(this.darkMode));
    console.log('local storage : ', localStorage.getItem('dark_mode'));
  }
}
