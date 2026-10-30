import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  logoName: string = 'РУМТИБЕТ';

  constructor() {
    this.saveLastVisit();
    this.saveQuantityVisits(); 

    // Первый источник данных  
    const products: Collection<string> = new Collection<string>([
      'Ноутбук',
      'Мышь',
      'Клавиатура'
    ]);

    // Второй источник данных  
    const prices: Collection<number> = new Collection<number>([
      75000,
      1500,
      4000
    ]);
  }

  isPrimaryColor(color: Color): boolean {
    return [
      Color.RED,
      Color.GREEN,
      Color.BLUE
    ].includes(color);
  }

  saveLastVisit(): void {
    localStorage.setItem('lastVisit', new Date().toISOString());
  }

  saveQuantityVisits(): void {
    const visits: number = Number(localStorage.getItem('visits')) || 0;
    localStorage.setItem('visits', String(visits + 1));
  }
}

 