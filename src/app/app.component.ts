import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {}
  lotsOfTabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']; 
  selectedValue: string = '';
  options: any[] = [
    { value: 'option1', viewValue: 'სს კურაციო' },
    { value: 'option2', viewValue: 'Option 2' },
    { value: 'option3', viewValue: 'Option 3' }
  ];
  selectedOpt = this.options[0].value;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    register();const swiper = new Swiper(".mySwiper", {
      loop: true,breakpoints: {
        992: {
          slidesPerView: 7,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 8
        },
        360: {
          slidesPerView: 4,
          spaceBetween: 8
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  public config: SwiperOptions = {
    spaceBetween: 20,
    navigation: true,
    slidesPerView: 7,
  };
}
