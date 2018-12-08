import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../ngrx/reducers';
import {Observable} from 'rxjs';
import * as actions from '../ngrx/actions/links';
import {selectListState} from '../ngrx/selectors/link';
import {Link} from '../link/models/link';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    links$: Observable<Link[]>;

    constructor(private store: Store<AppState>) {
        this.links$ = store.pipe(select(selectListState));
    }

    ngOnInit() {
        this.store.dispatch({type: actions.ActionTypes.FetchLinks});
    }
}
