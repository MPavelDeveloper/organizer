import { TestBed } from '@angular/core/testing';
import { OrganizerComponent } from './organizer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OrganizerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OrganizerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled18'`, () => {
    const fixture = TestBed.createComponent(OrganizerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('untitled18');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(OrganizerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('untitled18 app is running!');
  });
});
