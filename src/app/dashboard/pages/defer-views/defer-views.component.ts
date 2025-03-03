import {Component} from '@angular/core';
import {TitleComponent} from '@shared/title/title.component';
import {HeavyLoadersSlowComponent} from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  imports: [
    TitleComponent,
    HeavyLoadersSlowComponent,
  ],
  standalone: true,
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
