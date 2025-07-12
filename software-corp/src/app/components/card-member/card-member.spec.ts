import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMember } from './card-member';

describe('CardMember', () => {
  let component: CardMember;
  let fixture: ComponentFixture<CardMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
