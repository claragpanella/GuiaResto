import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestoComponent } from './view-resto.component';

describe('ViewRestoComponent', () => {
  let component: ViewRestoComponent;
  let fixture: ComponentFixture<ViewRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
