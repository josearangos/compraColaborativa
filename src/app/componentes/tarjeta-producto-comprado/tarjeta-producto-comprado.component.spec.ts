import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoCompradoComponent } from './tarjeta-producto-comprado.component';

describe('TarjetaProductoCompradoComponent', () => {
  let component: TarjetaProductoCompradoComponent;
  let fixture: ComponentFixture<TarjetaProductoCompradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaProductoCompradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProductoCompradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
