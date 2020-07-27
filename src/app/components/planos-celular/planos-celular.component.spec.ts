import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosCelularComponent } from './planos-celular.component';

describe('PlanosCelularComponent', () => {
  let component: PlanosCelularComponent;
  let fixture: ComponentFixture<PlanosCelularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosCelularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
