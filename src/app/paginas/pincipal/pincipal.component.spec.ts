import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincipalComponent } from './pincipal.component';

describe('PincipalComponent', () => {
  let component: PincipalComponent;
  let fixture: ComponentFixture<PincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
