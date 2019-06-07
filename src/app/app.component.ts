import { Component, OnInit } from '@angular/core';
import {
    ViewerService,
    WebeventsService,
    ViewerState,
    DetailedNavLink,
    NavLink,
} from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _appName: string;
    private _backgroundColor: string;
    // private property to user's product info
    private _viewer: ViewerState;

    constructor(private _viewerService: ViewerService, private _webeventsService: WebeventsService) {
        this._appName = 'Home';
        this._backgroundColor = 'rgba(255,255,255, 0)';
        this._viewer = {
            display_name: '',
            avatarImg: '',
            access_token: '',
            user_id: '',
            user_package: null,
            navLinks: {
              products: [],
              user: [],
            },
        };

        this._webeventsService.getMessages().subscribe(msgs => {
          console.log(msgs)
        });
    }

    get backgroundColor(): string {
        return this._backgroundColor;
    }

    get appName(): string {
        return this._appName;
    }

    get products(): NavLink[] | DetailedNavLink[] {
        return this._viewer.navLinks.products[0];
    }

    get viewer(): ViewerState {
      const viewer = Object.assign({}, this._viewer); //clone viewer
      viewer.navLinks = {
        ...viewer.navLinks,
        products: this._processProducts(<DetailedNavLink[][]>viewer.navLinks.products)
      };
      return viewer;
    }

    private _processProducts(products: DetailedNavLink[][]): NavLink[][] {
      return products
        .map(section =>section
          .map(product => ({
            // remove the description so we don't paint it in the navbar
          key: product.key,
          title: product.title,
          url: product.url,
        })));
    }

    ngOnInit() {
        this._viewerService.fetch().subscribe((viewer: ViewerState) => this._viewer = viewer);
    }
}
