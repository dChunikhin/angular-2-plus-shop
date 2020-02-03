import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: true })
  appTitle: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = 'Angular Shop';
  }

}
