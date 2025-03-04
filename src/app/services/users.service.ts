import {computed, inject, Injectable, signal} from '@angular/core';
import {User, UsersResponse} from '@interfaces/users-response.interface';
import {delay, map, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SingleUserResponse} from '@interfaces/single-user-response.interface';

export interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly http = inject(HttpClient);
  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed<User[]>(() => this.#state().users);
  public loading = computed<boolean>(() => this.#state().loading);

  constructor() {
    console.log('Instantiated service..');
    this.http.get<UsersResponse>('https://reqres.in/api/users').pipe(
      delay(1500),
    ).subscribe(usersRes => {
      this.#state.set({
        users: usersRes.data,
        loading: false
      });
    });
  }

  getUserById(id: string): Observable<User> {
   return  this.http.get<SingleUserResponse>(`https://reqres.in/api/users/${id}`).pipe(
     delay(1500),
     map(res => res.data)
   );
  }
}
