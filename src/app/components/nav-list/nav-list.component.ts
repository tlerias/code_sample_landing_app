import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
    // private property to user's list info
    private _list: any[];

    constructor() {
        this._list = [];
    }

    /**
     * Sets private property _list
     *
     * @param list
     */
    @Input() set list(list: any[]) {
        this._list = list;
    }

    /**
     * Returns private property _list
     *
     * @returns {any[]}
     */
    get list(): any[] {
        return this._list;
    }

}
