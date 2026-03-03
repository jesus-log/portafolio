import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage { }
