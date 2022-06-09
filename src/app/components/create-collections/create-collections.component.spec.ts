import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCollectionsComponent } from './create-collections.component';

describe('CreateCollectionsComponent', () => {
  let component: CreateCollectionsComponent;
  let fixture: ComponentFixture<CreateCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
