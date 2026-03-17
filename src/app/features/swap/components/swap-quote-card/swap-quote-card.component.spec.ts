import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapQuoteCard } from './swap-quote-card.component';

describe('SwapQuoteCard', () => {
  let component: SwapQuoteCard;
  let fixture: ComponentFixture<SwapQuoteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapQuoteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapQuoteCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
