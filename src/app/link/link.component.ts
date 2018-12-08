import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../ngrx/reducers';
import * as actions from '../ngrx/actions/doctors';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})
export class LinkComponent {

    @Input()
    practices: string[];

    @Input()
    city: string;

    constructor(private store: Store<AppState>) {
    }

    onClick(city, practice) {
        this.store.dispatch({type: actions.ActionTypes.FetchDoctors, payload: {city, practice}});
    }
}
