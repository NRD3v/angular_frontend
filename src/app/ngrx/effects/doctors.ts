import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as Doctors from '../actions/doctors';

@Injectable()
export class DoctorsEffects {
    @Effect()
    fetchDoctors$: Observable<Action> = this.actions$.pipe(
        ofType(Doctors.ActionTypes.FetchDoctors),
        mergeMap((action) => {
            const params = {
                city: action.payload.city,
                practice: action.payload.practice,
                searchType: 'search_by_city_and_practice',
            };
            return this.apiService.search(params).pipe(
                map(data => ({
                    type: Doctors.ActionTypes.FetchDoctorsSuccess,
                    payload: data
                }))
            );
        })
    );

    constructor(private apiService: ApiService, private actions$: Actions) {}
}
