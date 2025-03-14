import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumBlockComponent } from './medium-block.component';

describe('MediumBlockComponent', () => {
  let component: MediumBlockComponent;
  let fixture: ComponentFixture<MediumBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
