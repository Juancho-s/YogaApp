import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsanaDetailsComponent } from './asana-details.component';

describe('AsanaDetailsComponent', () => {
  let component: AsanaDetailsComponent;
  let fixture: ComponentFixture<AsanaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsanaDetailsComponent]
    });
    fixture = TestBed.createComponent(AsanaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
