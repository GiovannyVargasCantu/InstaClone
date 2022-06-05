import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDetalleComponent } from './feed-detalle.component';

describe('FeedDetalleComponent', () => {
  let component: FeedDetalleComponent;
  let fixture: ComponentFixture<FeedDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
