import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCalendarComponent } from './event-calendar.component';
import { EventCalendarRoutingModule } from './event-calendar-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    EventCalendarRoutingModule,
    SharedModule,
    FullCalendarModule,
    TagInputModule,
    FormsModule
  ],
  declarations: [EventCalendarComponent]
})
export class EventCalendarModule { }
