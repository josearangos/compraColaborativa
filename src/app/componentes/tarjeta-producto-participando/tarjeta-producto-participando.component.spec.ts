import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoParticipandoComponent } from './tarjeta-producto-participando.component';

describe('TarjetaProductoParticipandoComponent', () => {
  let component: TarjetaProductoParticipandoComponent;
  let fixture: ComponentFixture<TarjetaProductoParticipandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaProductoParticipandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProductoParticipandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
