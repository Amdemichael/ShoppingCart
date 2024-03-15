import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartExampleComponent } from './shopping-cart-example.component';

describe('ShoppingCartExampleComponent', () => {
  let component: ShoppingCartExampleComponent;
  let fixture: ComponentFixture<ShoppingCartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
