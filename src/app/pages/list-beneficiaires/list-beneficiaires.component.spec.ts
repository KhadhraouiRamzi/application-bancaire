import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeneficiairesComponent } from './list-beneficiaires.component';

describe('ListBeneficiairesComponent', () => {
  let component: ListBeneficiairesComponent;
  let fixture: ComponentFixture<ListBeneficiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBeneficiairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeneficiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
