import * as Doctors from '../actions/doctors';
import {Doctor} from '../../doctor/models/doctor';

export const initialState: DoctorsState = {
    list: []
};

export interface DoctorsState {
    list: Doctor[];
}

export function reducer(state = initialState, action: Doctors.DoctorsActions): DoctorsState {
    switch (action.type) {
        case Doctors.ActionTypes.FetchDoctorsSuccess:
            state = {
                ...state,
                list: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}
