import { Component } from '@angular/core';
import {TitleComponent} from '@shared/title/title.component';
import {HeavyLoadersFastComponent} from '@shared/heavy-loaders/heavy-loaders-fast.component';
import {CommonModule} from '@angular/common';

@Component({
  imports: [
    TitleComponent,
    HeavyLoadersFastComponent,
    CommonModule
  ],
  standalone: true,
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
