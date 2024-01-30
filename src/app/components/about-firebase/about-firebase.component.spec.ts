import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirebaseComponent } from './about-firebase.component';

describe('AboutFirebaseComponent', () => {
  let component: AboutFirebaseComponent;
  let fixture: ComponentFixture<AboutFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFirebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
