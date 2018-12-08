import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as Links from '../actions/links';

@Injectable()
export class LinksEffects {
    @Effect()
    fetchLinks$: Observable<Action> = this.actions$.pipe(
        ofType(Links.ActionTypes.FetchLinks),
        mergeMap(() => {
            return this.http.get('http://127.0.0.1:8000/links').pipe(
                map(data => {
                    return ({ type: Links.ActionTypes.FetchLinksSuccess, payload: data });
                })
            );
        })
    );

    constructor(private http: HttpClient, private actions$: Actions) {}
}
