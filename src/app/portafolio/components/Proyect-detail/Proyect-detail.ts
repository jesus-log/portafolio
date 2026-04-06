import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import { Proyect } from '../../interfaces/Proyect.interface';
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'proyect-detail',
  imports: [],
  templateUrl: './Proyect-detail.html',
  host: { class: 'w-full h-full md:w-[60%]' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectDetail implements AfterViewInit, OnDestroy {

  proyect = input.required<Proyect | undefined>();
  swiperContainer = viewChild.required<ElementRef>('swiperContainer');
  private swiper?: Swiper;
  private viewInitialized = false;

  constructor() {
    effect(() => {
      this.proyect();

      if (!this.viewInitialized) {
        return;
      }

      requestAnimationFrame(() => this.initSwiper());
    });
  }

  ngAfterViewInit() {
    this.viewInitialized = true;
    this.initSwiper();
  }

  ngOnDestroy(): void {
    this.swiper?.destroy(true, true);
    this.swiper = undefined;
  }

  private initSwiper(): void {
    const container = this.swiperContainer().nativeElement;

    this.swiper?.destroy(true, true);
    this.swiper = new Swiper(container, {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      observer: true,
      observeParents: true,
      watchOverflow: true,
    });
  }
}
