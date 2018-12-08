import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';
import {DoctorsState} from '../reducers/doctors';

export const getDoctorsState = (state: AppState) => state.doctors;

export const selectDoctorsListState = createSelector(
    getDoctorsState,
    (state: DoctorsState) => state.list
);
