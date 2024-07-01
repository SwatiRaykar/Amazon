import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVarificationComponent } from './email-varification.component';

describe('EmailVarificationComponent', () => {
  let component: EmailVarificationComponent;
  let fixture: ComponentFixture<EmailVarificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailVarificationComponent]
    });
    fixture = TestBed.createComponent(EmailVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
