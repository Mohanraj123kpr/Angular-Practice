import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlExample } from './html-example';

describe('HtmlExample', () => {
  let component: HtmlExample;
  let fixture: ComponentFixture<HtmlExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
