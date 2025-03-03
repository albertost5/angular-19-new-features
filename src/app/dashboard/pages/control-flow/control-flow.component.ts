import {Component, signal} from '@angular/core';
import {TitleComponent} from '@shared/title/title.component';

@Component({
  imports: [
    TitleComponent
  ],
  standalone: true,
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte', 'Astro']);
  public emptyFrameworks = signal<string[]>([]);
  public randomNumber = signal<number>(-1);

  toggleContent() {
    this.showContent.update(current => !current);
  }

  randomFramework() {
    this.randomNumber.set(Math.floor(Math.random() * 5));
  }
}
