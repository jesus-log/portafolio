import { AfterViewInit, Component, computed, ElementRef, inject, OnDestroy, OnInit, output, signal, viewChild } from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';
import { Proyect } from '../../interfaces/Proyect.interface';
import Swiper from 'swiper/bundle';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';

@Component({
  selector: 'proyects-selector',
  imports: [],
  templateUrl: './proyects-selector.html',
  host: { class: 'w-[40%] min-w-0' }
})
export class ProyectsSelector implements OnInit, AfterViewInit, OnDestroy {

  allProyects = signal<Proyect[]>([]);
  proyects = signal<Proyect[]>([]);
  selectedTechnology = signal<string>('all');
  proyect = output<Proyect>();
  swiperContainer = viewChild.required<ElementRef>('swiperContainer');
  technologies = computed(() => {
    const unique = new Set(
      this.allProyects().flatMap((proyect) => proyect.tecnologies.map((tech) => tech.name))
    );

    return Array.from(unique).sort((a, b) => a.localeCompare(b));
  });

  colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  private swiper?: Swiper;

  private proyectService =inject(ProyectsService);

  ngOnInit(): void {
    const all = this.proyectService.proyects$();
    this.allProyects.set(all);
    this.proyects.set(all);
    this.emitFirstProyect();
  }

  ngAfterViewInit(): void {
    const container = this.swiperContainer().nativeElement;

    this.swiper?.destroy(true, true);
    this.swiper = new Swiper(container, {
      modules: [EffectCards],
      effect: 'cards',
      grabCursor: true,
      slidesPerView: 1,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      on: {
        slideChange: () => this.emitActiveProyect(),
      },
    });
  }

  ngOnDestroy(): void {
    this.swiper?.destroy(true, true);
    this.swiper = undefined;
  }

  filterByTechnology(technology: string): void {
    this.selectedTechnology.set(technology);

    const filtered =
      technology === 'all'
        ? this.allProyects()
        : this.allProyects().filter((proyect) =>
            proyect.tecnologies.some((tech) => tech.name === technology)
          );

    this.proyects.set(filtered);
    this.emitFirstProyect();
    this.resetSwiper();
  }

  private emitFirstProyect(): void {
    const first = this.proyects()[0];

    if (first) {
      this.proyect.emit(first);
    }
  }

  private resetSwiper(): void {
    requestAnimationFrame(() => {
      if (!this.swiper) {
        return;
      }

      this.swiper.update();

      if (this.proyects().length > 0) {
        this.swiper.slideTo(0, 0);
      }
    });
  }

  private emitActiveProyect(): void {
    const index = this.swiper?.realIndex ?? 0;
    const currentProyect = this.proyects()[index];

    if (currentProyect) {
      this.proyect.emit(currentProyect);
    }
  }
}
