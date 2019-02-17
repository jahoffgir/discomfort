import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubmissionComponent } from './app-submission.component';

describe('AppSubmissionComponent', () => {
  let component: AppSubmissionComponent;
  let fixture: ComponentFixture<AppSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
