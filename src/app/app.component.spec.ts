import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NavBarModule } from '@tadaweb/ng-nav-bar';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {
    ViewerService,
    ViewerState
} from './shared';


describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    class ViewerServiceMock {
        fetch(): Observable<ViewerState> {
            return Observable.of({
                display_name: '',
                avatarImg: '',
                access_token: '',
                user_id: '',
                user_package: {
                  title: '',
                  url: '',
                  thumbnail: '',
                },
                navLinks: {
                  products: [[{
                    title: '',
                    url: '',
                    thumbnail: '',
                    description: '',
                    key: '',
                  }, {
                    title: '',
                    url: '',
                    thumbnail: '',
                    description: '',
                    key: '',
                  }]],
                  user: [[{
                    title: '',
                    url: '',
                    thumbnail: '',
                    description: '',
                    key: '',
                  }],[{
                    title: '',
                    url: '',
                    key: '',
                  }]]
                }
            });
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                NavBarModule,
            ],
            providers: [
                { provide: ViewerService, useClass: ViewerServiceMock }
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
    });

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it('should fetch a list', () => {
        app.ngOnInit();
        expect(app.products.length).toBe(2);
    });

    it('should set an app name', () => {
        expect(app.appName).toBeDefined();
    });

    it('should set a user ', () => {
        expect(app.viewer).toBeDefined();
    });

    it('should set a backgroundColor ', () => {
        expect(app.backgroundColor).toBeDefined();
    });

});
