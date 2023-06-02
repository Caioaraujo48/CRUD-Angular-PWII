import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>[{titulo}]</h1>
  <autoria [autor] = "nome"></autoria>
  `
})
export class AppComponent {
  title = 'frontend';
}
