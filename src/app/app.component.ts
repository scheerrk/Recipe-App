import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { InputRecipeComponent } from './components/input-recipe/input-recipe.component';
import { SearchDialogComponent } from './shared/components/search-dialog/search-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'recipe-app';
  constructor(public router: Router, public dialog: MatDialog) { }

  addRecipe() {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.disableClose = false;
    config.panelClass = 'dialog-container';
    // config.backdropClass = 'backdropBackground';
    const dr = this.dialog.open(InputRecipeComponent, config);
  }
  
  openSearchDialog() {
    const dialogRef = this.dialog.open(SearchDialogComponent);
  }
}
