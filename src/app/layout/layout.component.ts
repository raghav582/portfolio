import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isFixed:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if(window.pageYOffset >= 735) {
      this.isFixed = true;
    }
    else {
      this.isFixed = false;
    }
  }
}
