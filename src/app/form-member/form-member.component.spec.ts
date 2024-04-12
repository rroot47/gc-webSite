import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMemberComponent } from './form-member.component';

describe('FormMemberComponent', () => {
  let component: FormMemberComponent;
  let fixture: ComponentFixture<FormMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
