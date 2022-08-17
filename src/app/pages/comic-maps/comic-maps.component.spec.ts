import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicMapsComponent } from './comic-maps.component';

describe('ComicMapsComponent', () => {
  let component: ComicMapsComponent;
  let fixture: ComponentFixture<ComicMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
