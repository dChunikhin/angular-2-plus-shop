import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  name: string;
  description: string;
  price: number;
  category = ['books', 'beauty', 'auto'];
  isAvailable: boolean;

  constructor() { }

}
