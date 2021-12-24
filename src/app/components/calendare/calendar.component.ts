import {Component, OnDestroy, OnInit} from '@angular/core';
import {DateProviderService} from '../../services/date-provider.service';

interface CalendarEvent {
  day: number,
  date: string,
  description: string,
  isEmpty: boolean
}

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy{
  private days: number;
  public events: Array<CalendarEvent>;
  private dateProviderService: DateProviderService;

  constructor(dateProviderService: DateProviderService) {
    this.dateProviderService = dateProviderService;
  }

  ngOnInit(): void {
    this.dateProviderService.dateDaysSource.subscribe(days => {
      this.events = [];
      this.days = days;
      let index = 1;
      while (index <= days) {
        this.events.push({
          day: index,
          date:'',
          description:'',
          isEmpty: true,
        });
        index ++;
      }
    });
  }

  ngOnDestroy(): void {
    this.dateProviderService.dateDaysSource.unsubscribe();
  }
}
