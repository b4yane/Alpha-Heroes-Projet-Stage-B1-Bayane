import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieCarte } from './galerie-carte';

describe('GalerieCarte', () => {
  let component: GalerieCarte;
  let fixture: ComponentFixture<GalerieCarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieCarte],
    }).compileComponents();

    fixture = TestBed.createComponent(GalerieCarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
