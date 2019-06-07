import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewerService, WebeventsService } from './shared';
import {
    NavComponent,
    NavListComponent,
    NavListItemComponent,
} from './components';

import { NavBarModule } from '@redacted/ng-nav-bar';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        NavListComponent,
        NavListItemComponent,
    ],
    imports: [
        NavBarModule,
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        ViewerService,
        WebeventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
