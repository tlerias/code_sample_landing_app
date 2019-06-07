import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { NavListComponent } from '../nav-list/nav-list.component'
import { NavListItemComponent } from '../nav-list-item/nav-list-item.component'

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavComponent,
                NavListComponent,
                NavListItemComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render', () => {
        expect(component).toBeDefined();
    });

    it('should have a list', () => {
        component.list = [{
            title: '',
            url: '',
            description: '',
            thumbnail: '',
            key: ''
        }];
        expect(component.list.length).toBe(1);
    });
});
