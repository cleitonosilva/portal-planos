import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAssinaturaComponent } from './tv-assinatura.component';

describe('TvAssinaturaComponent', () => {
  let component: TvAssinaturaComponent;
  let fixture: ComponentFixture<TvAssinaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvAssinaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAssinaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
