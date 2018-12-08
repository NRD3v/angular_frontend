import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';
import {LinksState} from '../reducers/links';

export const getLinksState = (state: AppState) => state.links;

export const selectListState = createSelector(
    getLinksState,
    (state: LinksState) => state.list
);

export const selectHighlightedLinkState = createSelector(
    getLinksState,
    (state: LinksState) => state.highlightedLink
);
