import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { Proyect } from '../../interfaces/Proyect.interface';
import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'proyect-detail',
  imports: [],
  templateUrl: './Proyect-detail.html',
  host: { class: 'w-[60%]' }
})
export class ProyectDetail implements AfterViewInit {

  proyect = input.required<Proyect | undefined>();
  swiperContainer = viewChild.required<ElementRef>('swiperContainer');

  ngAfterViewInit() {
    if (this.swiperContainer) {
      new Swiper(this.swiperContainer().nativeElement, {
        modules: [
          Navigation
        ],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
}
