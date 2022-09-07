import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgBallsComponent } from './bg-balls.component';

describe('BgBallsComponent', () => {
  let component: BgBallsComponent;
  let fixture: ComponentFixture<BgBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgBallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
