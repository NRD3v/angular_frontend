import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromDoctors from './doctors';
import * as fromLinks from './links';

export interface AppState {
    doctors: fromDoctors.DoctorsState;
    links: fromLinks.LinksState;
}

export const reducers: ActionReducerMap<AppState> = {
    doctors: fromDoctors.reducer,
    links: fromLinks.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
