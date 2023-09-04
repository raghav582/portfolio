import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // @HostListener('window:scroll')
  counter() {
    // let docViewTop = $(window).scrollTop();
    // let elemTop = $("#aboutid").offset().top;

    // if (true) {
    //   $('.counter').prop('Counter', 0).animate({
    //     Counter: 4
    //   }, {
    //     duration: 1000,
    //     easing: 'swing',
    //     delay: 10,
    //     step: function (now) {
    //       $(this).text(Math.ceil(now));
    //     }
    //   }
    //   );
    // }
  }
}