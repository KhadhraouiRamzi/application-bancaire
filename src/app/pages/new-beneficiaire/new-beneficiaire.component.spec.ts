import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBeneficiaireComponent } from './new-beneficiaire.component';

describe('NewBeneficiaireComponent', () => {
  let component: NewBeneficiaireComponent;
  let fixture: ComponentFixture<NewBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBeneficiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
