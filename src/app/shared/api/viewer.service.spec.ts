import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ViewerService } from './viewer.service';

describe('ViewerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ViewerService,
                { provide: Http, useClass: MockBackend }
            ]
        });
    });

    it('should exist', inject([ViewerService], (service: ViewerService) => {
        expect(service).toBeTruthy();
    }));

    it('should fetch user data', inject([ViewerService], (service: ViewerService) => {
        service.fetch().subscribe(user => {
            expect(user).toBeDefined();
        })

    }));
});
