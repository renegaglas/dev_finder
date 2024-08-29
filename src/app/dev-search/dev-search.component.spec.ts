import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSearchComponent } from './dev-search.component';

describe('DevSearchComponent', () => {
  let component: DevSearchComponent;
  let fixture: ComponentFixture<DevSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
