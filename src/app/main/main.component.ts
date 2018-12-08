import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../ngrx/reducers';
import {Observable} from 'rxjs';
import * as actions from '../ngrx/actions/links';
import {selectLinksListState} from '../ngrx/selectors/link';
import {selectDoctorsListState} from '../ngrx/selectors/doctors';
import {Doctor} from '../doctor/models/doctor';
import {Link} from '../link/models/link';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    doctors$: Observable<Doctor[]>;
    links$: Observable<Link[]>;

    constructor(private store: Store<AppState>) {
        this.doctors$ = store.pipe(select(selectDoctorsListState));
        this.links$ = store.pipe(select(selectLinksListState));
    }

    ngOnInit() {
        this.store.dispatch({type: actions.ActionTypes.FetchLinks});
    }
}
