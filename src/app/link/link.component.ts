import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

    @Input()
    practices: string[];

    @Input()
    city: string;

    constructor() { }

    ngOnInit() {
    }

}
