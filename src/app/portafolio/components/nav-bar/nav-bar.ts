import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar { }
