import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardTileComponent } from './recipe-card-tile.component';

describe('RecipeCardTileComponent', () => {
  let component: RecipeCardTileComponent;
  let fixture: ComponentFixture<RecipeCardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
