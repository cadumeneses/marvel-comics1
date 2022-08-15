import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHqComponent } from './list-hq.component';

describe('ListHqComponent', () => {
  let component: ListHqComponent;
  let fixture: ComponentFixture<ListHqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
