import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ingredient } from 'src/app/types/ingredient';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
  userSearch: FormGroup;
  filteredCategorie$: Observable<any[]>;
  filteredIngredient$: Observable<any[]>;
  categoryNames: any[];
  categories = [
    {
        name: "desserts",
        photoURL: "/assets/images/4c93860a6c3ae62fad2d442f5a9a430d.jpg"
    },
    {
      name: "vegan",
      photoURL: "/assets/images/7ca6646093c7a90b0996d2ac084384a1.jpg"
    },
    {
      name: "brunch",
      photoURL: "/assets/images/8e58c699fed88d7f76df8e36c55ece53.jpg"
    },
    {
      name: "pasta",
      photoURL: "/assets/images/b727c4d62e6a63025ee7bfbc84f93f1d.jpg"
    }
  ]
  ingredients: Ingredient[] = [
    {content: "flour", quantity: 2, measure: "cups"},
    {content: "bacon", quantity: 1, measure: "pound"},
    {content: "cinnamon", quantity: 2, measure: "tsp"},
    {content: "milk", quantity: 3, measure: "cups"}
  ]

  constructor(
    private formbuilder: FormBuilder, 
  ) { 
    this.categoryNames = this.categories.map((category: any) => {
      return {name: category.name}
    })
    console.log("categoryNames: ", this.categoryNames)
  }

  ngOnInit(): void {
    this.userSearch = this.formbuilder.group({
      searchInput: new FormControl('')
    });
    this.filteredCategorie$ = this.userSearch.controls.searchInput.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ?  this._filterCategories(name) : this.categories.slice())
      );
    this.filteredIngredient$ = this.userSearch.controls.searchInput.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.content),
        map(content => content ?  this._filterIngredients(content) : this.ingredients.slice())
      );
  }

  private _filterCategories(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.categories.filter(category => category.name.toLowerCase().indexOf((filterValue)) === 0);
  }

  private _filterIngredients(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.ingredients.filter(ingredient => ingredient.content.toLowerCase().indexOf((filterValue)) === 0);
  }


}
