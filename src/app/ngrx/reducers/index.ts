import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromLinks from './links';

export interface AppState {
    links: fromLinks.LinksState;
}

export const reducers: ActionReducerMap<AppState> = {
    links: fromLinks.linksReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
