import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRecipeComponent } from './input-recipe.component';

describe('ViewRecipesComponent', () => {
  let component: InputRecipeComponent;
  let fixture: ComponentFixture<InputRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
