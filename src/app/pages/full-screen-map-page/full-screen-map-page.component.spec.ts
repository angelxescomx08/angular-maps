import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenMapPageComponent } from './full-screen-map-page.component';

describe('FullScreenMapPageComponent', () => {
  let component: FullScreenMapPageComponent;
  let fixture: ComponentFixture<FullScreenMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenMapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
