import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapPageComponent } from './swap-page.component';

describe('SwapPage', () => {
  let component: SwapPageComponent;
  let fixture: ComponentFixture<SwapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
