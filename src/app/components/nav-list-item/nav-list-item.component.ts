import {
    Component,
    Input,
} from '@angular/core';

import {
    DetailedNavLink,
} from '../../shared';


@Component({
    selector: 'app-nav-list-item',
    templateUrl: './nav-list-item.component.html',
    styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent {
    private _item: DetailedNavLink;

    constructor() {
        this._item = {
            url: '',
            thumbnail: '',
            title: '',
            description: '',
            key: '',
        };
    }

    /**
     * Sets private property _item
     *
     * @param item
     */
    @Input() set item(item: DetailedNavLink) {
        this._item = item;
    }


    /**
     * Returns item property url
     *
     * @returns {string}
     */
    get url(): string {
        return this._item.url;
    }

    /**
     * Returns item property thumbnail
     *
     * @returns {string}
     */
    get thumbnail(): string {
        return this._item.thumbnail;
    }

    /**
     * Returns item property title
     *
     * @returns {string}
     */
    get title(): string {
        return this._item.title;
    }

    /**
     * Returns item property description
     *
     * @returns {string}
     */
    get description(): string {
        return this._item.description;
    }

}
