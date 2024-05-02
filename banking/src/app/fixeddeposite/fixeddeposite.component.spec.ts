import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeddepositeComponent } from './fixeddeposite.component';

describe('FixeddepositeComponent', () => {
  let component: FixeddepositeComponent;
  let fixture: ComponentFixture<FixeddepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixeddepositeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixeddepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
