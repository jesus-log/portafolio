import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Proyect } from '../../interfaces/Proyect.interface';

@Component({
  selector: 'proyect-detail',
  imports: [],
  templateUrl: './Proyect-detail.html',
  host: { class: 'w-full' }
})
export class ProyectDetail {

  proyect = input.required<Proyect | undefined>();



 }
