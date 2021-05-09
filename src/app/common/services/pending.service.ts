import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class PendingService {
    isLoading$ = new BehaviorSubject<boolean>(false);

    constructor() {}

    public show() {
        this.isLoading$.next(true);
    }

    public hide() {
        this.isLoading$.next(false);
    }
}