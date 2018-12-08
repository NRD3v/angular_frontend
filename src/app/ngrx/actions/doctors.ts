import {Action} from '@ngrx/store';
import {Doctor} from '../../doctor/models/doctor';

export enum ActionTypes {
    FetchDoctors = '[Doctors] Fetch Doctors',
    FetchDoctorsSuccess = '[Doctors] Fetch Doctors Success'
}

class FetchDoctors implements Action {
    readonly type = ActionTypes.FetchDoctors;

    constructor(public payload: {city: string, practice: string}) {
    }
}

class FetchDoctorsSuccess implements Action {
    readonly type = ActionTypes.FetchDoctorsSuccess;

    constructor(public payload: Doctor[]) {
    }
}

export type DoctorsActions = | FetchDoctors | FetchDoctorsSuccess;
