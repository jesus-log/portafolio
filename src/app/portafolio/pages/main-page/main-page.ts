import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage implements OnInit {

  loading = signal<boolean>(true);
  typing = signal<boolean>(true);
  fraseNumber = signal<number>(0);

  ngOnInit(): void {
    this.endLoading();
    this.isTyping();
  }

  endLoading() {
    setTimeout(() => {
      this.loading.set(false);
    }, 4000)
  }

  isTyping() {
    setInterval(() => {
      this.typing.set(!this.typing());
      this.fraseNumber.set(this.fraseNumber() + 1);
      if (this.fraseNumber() == 16) this.fraseNumber.set(0);
    }, 3500);
  }

  //TODO: Quitar efecto del fondo, implementar los temas,ya tengo fondo/letra, cambiar en la pag principal el tema completo en cada vuelta si no hay un tema seleccionado

}
