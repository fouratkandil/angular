import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenvironmentComponent } from './addenvironment.component';

describe('AddenvironmentComponent', () => {
  let component: AddenvironmentComponent;
  let fixture: ComponentFixture<AddenvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddenvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
