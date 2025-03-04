import {Component, inject} from '@angular/core';
import {UsersService} from '@services/users.service';
import {TitleComponent} from '@shared/title/title.component';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    TitleComponent,
    RouterLink
  ],
  standalone: true,
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  usersService = inject(UsersService);
}
