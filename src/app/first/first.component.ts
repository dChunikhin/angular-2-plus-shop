import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  public name: string;
  public description: string;
  public price: number;
  public category = ['books', 'beauty', 'auto'];
  public isAvailable: boolean;

  constructor() { }

}
