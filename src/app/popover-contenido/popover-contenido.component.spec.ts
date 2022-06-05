import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContenidoComponent } from './popover-contenido.component';

describe('PopoverContenidoComponent', () => {
  let component: PopoverContenidoComponent;
  let fixture: ComponentFixture<PopoverContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
