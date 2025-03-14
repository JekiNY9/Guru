import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetTopPanelComponent } from './user-cabinet-top-panel.component';

describe('UserCabinetTopPanelComponent', () => {
  let component: UserCabinetTopPanelComponent;
  let fixture: ComponentFixture<UserCabinetTopPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCabinetTopPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetTopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
