import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../store/types';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
    getUser(): Observable<User> {
        const user: User = { // fake http response
            isAdmin: true,
            name: 'John Doe'
        };
        return of(user);
    }
}