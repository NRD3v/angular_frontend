import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    ROOT_URL = 'http://127.0.0.1:8000';
    LINKS_ROUTE = this.ROOT_URL + '/links';
    SEARCH_ROUTE = this.ROOT_URL + '/search';

    constructor(private http: HttpClient) {
    }

    links() {
        return this.http.get(this.LINKS_ROUTE).pipe(map(data => data));
    }

    search(params) {
        return this.http.post(this.SEARCH_ROUTE, params).pipe(map(data => data));
    }
}
