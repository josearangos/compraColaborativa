import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoInicialComponent } from './tarjeta-producto-inicial.component';

describe('TarjetaProductoInicialComponent', () => {
  let component: TarjetaProductoInicialComponent;
  let fixture: ComponentFixture<TarjetaProductoInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaProductoInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProductoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
