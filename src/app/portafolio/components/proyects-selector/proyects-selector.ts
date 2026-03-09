import { ChangeDetectionStrategy, Component, inject, OnInit, output, signal } from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';
import { Proyect } from '../../interfaces/Proyect.interface';

@Component({
  selector: 'proyects-selector',
  imports: [],
  templateUrl: './proyects-selector.html',
  host: { class: 'w-[20%]' }
})
export class ProyectsSelector implements OnInit{

  proyects = signal<Proyect[]>([]);
  proyect = output<Proyect>();

  private proyectService =inject(ProyectsService);


  ngOnInit(): void {
    this.proyects.set(this.proyectService.proyects$())
    this.proyect.emit(this.proyects()[0]);
  }

  getProyect(p:Proyect){
    this.proyect.emit(p);
  }



 }
