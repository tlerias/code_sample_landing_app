import { Component, Input } from '@angular/core';
import {
    DetailedNavLink,
} from '../../shared';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    // private property to user's list info
    private _list: DetailedNavLink[];

    constructor() {
        this._list = [];
    }

    /**
     * Sets private property _list
     *
     * @param list
     */
    @Input() set list(list: DetailedNavLink[]) {
        this._list = list;
    }

    /**
     * Returns private property _list
     *
     * @returns {any[]}
     */
    get list(): DetailedNavLink[] {
        return this._list;
    }
}
