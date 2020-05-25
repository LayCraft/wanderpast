import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosPopupComponent } from './ios-popup.component';

describe('IosPopupComponent', () => {
  let component: IosPopupComponent;
  let fixture: ComponentFixture<IosPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
