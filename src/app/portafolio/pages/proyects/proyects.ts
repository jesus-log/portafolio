import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProyectsSelector } from "../../components/proyects-selector/proyects-selector";
import { Proyect } from '../../interfaces/Proyect.interface';
import { ProyectDetail } from "../../components/Proyect-detail/Proyect-detail";

@Component({
  selector: 'app-proyects',
  imports: [ProyectsSelector, ProyectDetail],
  templateUrl: './proyects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyects {

  proyect = signal<Proyect | undefined >(undefined);

  setProyect(proyect:Proyect){
    this.proyect.set(proyect);
  }

 }
