import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
            return this.http.post('http://127.0.0.1:8000/search', {
                city: action.payload.city,
                practice: action.payload.practice,
                searchType: 'search_by_city_and_practice',
            }).pipe(
                map(data => {
                    console.log(data);
                    return ({ type: Doctors.ActionTypes.FetchDoctorsSuccess, payload: data });
                })
            );
        })
    );

    constructor(private http: HttpClient, private actions$: Actions) {}
}
