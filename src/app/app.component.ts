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
  logoName = 'РУМТИБЕТ';

constructor() {
  this.saveLastVisit();
  this.saveQuantityVisits (); 

  // Первый источник данных  
  const products = new Collection<string>([
    'Ноутбук',
    'Мышь',
    'Клавиатура'
  ]);

  // Второй источник данных  
  const prices = new Collection<number>([
    75000,
    1500,
    4000
  ]);

  console.log('Товары:', products.getAll());
  console.log('Цены:', prices.getAll());

 
  console.log('Первый товар:', products.get(0));
  console.log('Цена мыши:', prices.get(1));
}

  isPrimaryColor (color: Color): boolean {
  return Object.values(Color).includes(color);
}


saveLastVisit (): void {
  localStorage.setItem('lastVisit', new Date().toISOString());
}

saveQuantityVisits (): void {
  const visits = Number(localStorage.getItem('visits')) || 0;
  localStorage.setItem('visits', String(visits + 1));}

  

}


 