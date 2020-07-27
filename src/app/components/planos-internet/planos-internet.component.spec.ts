import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosInternetComponent } from './planos-internet.component';

describe('PlanosInternetComponent', () => {
  let component: PlanosInternetComponent;
  let fixture: ComponentFixture<PlanosInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
