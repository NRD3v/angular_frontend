import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
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
            return this.apiService.links().pipe(
                map(data => ({
                    type: Links.ActionTypes.FetchLinksSuccess,
                    payload: data
                }))
            );
        })
    );

    constructor(private apiService: ApiService, private actions$: Actions) {}
}
