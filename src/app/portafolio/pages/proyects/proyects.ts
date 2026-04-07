import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Location } from '@angular/common';
import { ProyectsSelector } from "../../components/proyects-selector/proyects-selector";
import { Proyect } from '../../interfaces/Proyect.interface';
import { ProyectDetail } from "../../components/Proyect-detail/Proyect-detail";
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  imports: [ProyectsSelector, ProyectDetail],
  templateUrl: './proyects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyects implements OnInit, OnDestroy {
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  proyect = signal<Proyect | undefined >(undefined);
  loading = signal(true);
  private loaderTimeoutId?: number;

  ngOnInit(): void {
    this.loaderTimeoutId = window.setTimeout(() => {
      this.loading.set(false);
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.loaderTimeoutId !== undefined) {
      window.clearTimeout(this.loaderTimeoutId);
      this.loaderTimeoutId = undefined;
    }
  }

  setProyect(proyect:Proyect){
    this.proyect.set(proyect);
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
      return;
    }

    this.router.navigateByUrl('/');
  }

 }
