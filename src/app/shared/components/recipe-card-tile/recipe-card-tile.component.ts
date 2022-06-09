import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { CollectionDialogComponent } from 'src/app/shared/components/collection-dialog/collection-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-card-tile',
  templateUrl: './recipe-card-tile.component.html',
  styleUrls: ['./recipe-card-tile.component.scss']
})
export class RecipeCardTileComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCollectionDialog() {
    const dialogRef = this.dialog.open(CollectionDialogComponent);
  }
}
