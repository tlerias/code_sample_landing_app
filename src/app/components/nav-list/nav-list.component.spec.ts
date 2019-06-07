import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListComponent } from './nav-list.component';
import { NavListItemComponent } from '../nav-list-item/nav-list-item.component';

describe('NavListComponent', () => {
    let component: NavListComponent;
    let fixture: ComponentFixture<NavListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavListComponent,
                NavListItemComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        component.list = [];
        expect(component).toBeTruthy();
    });

    it('should have a list', () => {
        component.list = [{
          title: '',
          url: '',
          thumbnail: '',
          description: '',
          key: '',
        }, {
          title: 'hi',
          url: 'i',
          thumbnail: 'ni',
          description: 'vi',
          key: 'ds',
        }];
        expect(component.list.length).toBe(2);
    });
});
