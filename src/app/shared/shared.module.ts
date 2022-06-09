import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCardTileComponent } from './components/recipe-card-tile/recipe-card-tile.component';
import { HeaderComponent } from './components/header/header.component';
import { FabComponent } from './components/fab/fab.component';
import { SnackbarService } from './services/snackbar.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { ButtonComponent } from './components/button/button.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { CollectionDialogComponent } from './components/collection-dialog/collection-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FabComponent,
    RecipeCardTileComponent,
    ButtonComponent,
    CategoryCardComponent,
    SearchDialogComponent,
    CollectionCardComponent,
    CollectionDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    DragDropModule,
    MatMenuModule,
    MatBadgeModule,
    MatSelectModule,
    MatCheckboxModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FabComponent,
    RecipeCardTileComponent,
    ButtonComponent,
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    CategoryCardComponent,
    SearchDialogComponent,
    MatDialogModule,
    MatInputModule,
    FlexLayoutModule,
    CollectionCardComponent,
    MatTooltipModule,
    MatAutocompleteModule,
    DragDropModule,
    MatMenuModule,
    MatBadgeModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SnackbarService
  ]
})
export class SharedModule { }
