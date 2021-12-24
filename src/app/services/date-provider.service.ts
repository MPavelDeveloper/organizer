import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {
  public defaultDate: string;
  public dateDaysSource: BehaviorSubject<number>;

  constructor() {
    this.defaultDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
    this.dateDaysSource = new BehaviorSubject<number>(this.getAmountOfDays(this.defaultDate))
  }

  public updateDateDays(days: number) {
    this.dateDaysSource.next(days);
  }

  public getNextMonthYear(date: string): string {
    let currentMonth = Number(this.parseMonth(date));
    let currentYear = Number(this.parseYear(date));
    let nextDate = this.createNextDate(currentMonth, currentYear);
    this.updateDateDays(this.getAmountOfDays(nextDate));
    return nextDate;
  }

  public getPreviousMonthYear(date: string): string {
    let currentMonth = Number(this.parseMonth(date));
    let currentYear = Number(this.parseYear(date));
    let previousDate = this.createPreviousDate(currentMonth, currentYear)
    this.updateDateDays(this.getAmountOfDays(previousDate));
    return previousDate;
  }

  private createNextDate(currentMonth: number, currentYear: number): string {
    let nextDate = '';
    if (currentMonth < 9) {
      nextDate = `${currentYear}-0${currentMonth + 1}`;
    } else if (currentMonth < 12) {
      nextDate = `${currentYear}-${currentMonth + 1}`;
    } else {
      nextDate = `${currentYear + 1}-01`;
    }
    return nextDate;
  }

  private createPreviousDate(currentMonth: number, currentYear: number): string {
    let previousDate = '';
    if (currentMonth === 1) {
      previousDate = `${currentYear - 1}-12`;
    } else if (currentMonth < 11) {
      previousDate = `${currentYear}-0${currentMonth - 1}`;
    } else {
      previousDate = `${currentYear}-${currentMonth - 1}`;
    }

    return previousDate
  }

  private parseYear(date: string): string {
    let delimIndex = date.indexOf('-');
    let year = date.slice(0, delimIndex);
    return year;
  }

  private parseMonth(date: string): string {
    let delimIndex = date.indexOf('-');
    let month = date.slice(delimIndex + 1);
    return month;
  }

  private getAmountOfDays(date: string): number {
    let year = Number(this.parseYear(date));
    let month = Number(this.parseMonth(date));
    let days = new Date(year, month, 0).getDate();
    return days;
  }

}

