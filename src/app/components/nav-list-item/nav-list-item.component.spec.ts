import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavListItemComponent } from './nav-list-item.component';


describe('NavListItemComponent', () => {
    let component: NavListItemComponent;
    let fixture: ComponentFixture<NavListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should paint information about a list item', () => {
        const testItem = {
            url: 'www.anotherlink.com',
            thumbnail: 'http://alink.com',
            title: 'Title',
            description: 'descrition and stuff',
            key: 'link'
        };
        component.item = testItem;
        expect(component['_item']).toBeDefined();
        expect(component.item).not.toBeDefined();
        expect(component.title).toBe(component.title);
        expect(component.url).toBe(component.url);
        expect(component.thumbnail).toBe(component.thumbnail);
        expect(component.description).toBe(component.description);


    });
});
