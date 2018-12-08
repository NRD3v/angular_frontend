import {Action} from '@ngrx/store';
import {Link} from '../../link/models/link';

export enum ActionTypes {
    FetchLinks = '[Links] Fetch Links',
    FetchLinksSuccess = '[Links] Fetch Links Success',
    HighlightLink = '[Links] Highlight Link',
    ResetHighlightedLink = '[Links] Reset Highlighted Link'
}

class FetchLinks implements Action {
    readonly type = ActionTypes.FetchLinks;

    constructor() {
    }
}

class FetchLinksSuccess implements Action {
    readonly type = ActionTypes.FetchLinksSuccess;

    constructor(public payload: Link[]) {
    }
}

class HighlightLink implements Action {
    readonly type = ActionTypes.HighlightLink;

    constructor(public payload: string) {
    }
}

class ResetHighlightedLink implements Action {
    readonly type = ActionTypes.ResetHighlightedLink;

    constructor(public payload: string) {
    }
}

export type LinksActions = | FetchLinks | FetchLinksSuccess | HighlightLink | ResetHighlightedLink;
