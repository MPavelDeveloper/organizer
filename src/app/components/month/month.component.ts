import {Component, OnInit} from '@angular/core';
import {DateProviderService} from '../../services/date-provider.service';

@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  public currentYearMonth: string;
  private dateProviderService: DateProviderService;

  constructor(dateProviderService: DateProviderService) {
    this.dateProviderService = dateProviderService;
  }

  ngOnInit(): void {
    this.currentYearMonth = this.dateProviderService.defaultDate;
  }

  public getNextMonth() {
    this.currentYearMonth = this.dateProviderService.getNextMonthYear(this.currentYearMonth)
  }

  public getPreviousMonth() {
    this.currentYearMonth = this.dateProviderService.getPreviousMonthYear(this.currentYearMonth)
  }

}
