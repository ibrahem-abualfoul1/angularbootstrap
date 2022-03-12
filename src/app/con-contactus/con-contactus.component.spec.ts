import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConContactusComponent } from './con-contactus.component';

describe('ConContactusComponent', () => {
  let component: ConContactusComponent;
  let fixture: ComponentFixture<ConContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
