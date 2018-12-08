import * as Links from '../actions/links';
import {Link} from '../../link/models/link';

export const initialState: LinksState = {
    list: [],
    highlightedLink: null
};

export interface LinksState {
    list: Link[];
    highlightedLink: string;
}

export function linksReducer(state = initialState, action: Links.LinksActions): LinksState {
    switch (action.type) {
        case Links.ActionTypes.FetchLinksSuccess:
            state = {
                ...state,
                list: action.payload
            };
            break;
        case Links.ActionTypes.HighlightLink:
            state = {
                ...state,
                highlightedLink: action.payload
            };
            break;
        case Links.ActionTypes.ResetHighlightedLink:
            state = {
                ...state,
                highlightedLink: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}
