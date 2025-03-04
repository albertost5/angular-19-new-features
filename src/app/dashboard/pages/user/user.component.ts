import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {UsersService} from '@services/users.service';
import {TitleComponent} from '@shared/title/title.component';

@Component({
  imports: [
    TitleComponent
  ],
  standalone: true,
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private readonly usersService = inject(UsersService);
  private readonly route = inject(ActivatedRoute)

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  );

  public fullName = computed(() => {
    if (this.user()) {
      return `User info: ${this.user()?.first_name} ${this.user()?.last_name}`
    } else {
      return `User info loading...`;
    }
  })
}
