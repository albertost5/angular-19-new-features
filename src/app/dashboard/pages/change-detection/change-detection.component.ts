import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TitleComponent} from '@shared/title/title.component';
import {CommonModule} from '@angular/common';

@Component({
  imports: [
    TitleComponent,
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {
  framework = signal({ name: 'Angular', releaseDate: 2016});
  frameworkProperty = {
    name: 'React',
    releaseDate: 2016
  }
  currentFramework = computed(() => `Change Detection - ${this.framework().name}`)

  constructor() {
    setTimeout(() => {

      // OnPush side effect => no update
      // this.frameworkProperty.name = 'Svelte';

      this.framework.update(current => ({...current, name: 'Astro'}));

      console.log('DONE!');
    }, 3000)
  }
}
