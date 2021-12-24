import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrganizerComponent } from './organizer.component';
import { OrganizerRoutingModule } from './routing/organizer-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MonthComponent } from './components/month/month.component';
import {FormsModule} from '@angular/forms';
import { CalendarComponent } from './components/calendare/calendar.component';

@NgModule({
  declarations: [
    OrganizerComponent,
    PageNotFoundComponent,
    MonthComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    OrganizerRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [OrganizerComponent]
})
export class OrganizerModule { }
