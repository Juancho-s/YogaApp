import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeComponent } from './switch-theme.component';

describe('SwitchThemeComponent', () => {
  let component: SwitchThemeComponent;
  let fixture: ComponentFixture<SwitchThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchThemeComponent]
    });
    fixture = TestBed.createComponent(SwitchThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
