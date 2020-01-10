import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // data binding
  title = 'platzy-store';
  // condicional ngIf
  show = true;
  // ciclo ngFor
  items1 = ['a', 'b', 'c', 'd'];
  items2 = [1, 2, 3];
  var1 = 2;
  // ..................................... //
  // ..................................... //
  // ..................................... //
  // array de productos //
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/i1.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/i2.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/i3.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/i4.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/i5.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/i6.png',
      title: 'uno',
      price: 80000,
      description: 'bla bla bla bla'
    }
  ];
  // agregar/ borrar
  addItem() {
    this.items1.push('x');
  }
  addItem1() {
    // const a = this.items1[0];
    // this.items1[0] = 'x';
    // let b = this.addItem1[1]
    // this.items1[1] = a;
    // for (let i = 2; i <= (this.items1.length); i++) {
    //   //this.items1[i] = b;
    // }
    this.items1.unshift('x');
  }
  deleteItem(index: number) {
    // this.items1.pop(); //ultima posicion
    this.items1.splice(index, 1); // primera posicion
  }
  deleteItem1() {
    this.items1.pop(); // ultima posicion
  }
}
