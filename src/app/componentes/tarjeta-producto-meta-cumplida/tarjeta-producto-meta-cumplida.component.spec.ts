import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoMetaCumplidaComponent } from './tarjeta-producto-meta-cumplida.component';

describe('TarjetaProductoMetaCumplidaComponent', () => {
  let component: TarjetaProductoMetaCumplidaComponent;
  let fixture: ComponentFixture<TarjetaProductoMetaCumplidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaProductoMetaCumplidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProductoMetaCumplidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
