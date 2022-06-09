import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CreateCollectionsComponent } from 'src/app/components/create-collections/create-collections.component';
import { CollectionService } from 'src/app/services/collections.service';
import { TokenService } from 'src/app/services/token.service';
import { Collection } from 'src/app/types/collection';
import { User } from 'src/app/types/user';


@Component({
  selector: 'app-collection-dialog',
  templateUrl: './collection-dialog.component.html',
  styleUrls: ['./collection-dialog.component.scss']
})
export class CollectionDialogComponent implements OnInit {

  @Input() collection:Collection;
  activeUser: User;
  public collections: Collection[];
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog:MatDialog,
    public tokenService: TokenService,
    public collectionService: CollectionService,
    private dr: MatDialogRef<CreateCollectionsComponent>,
    private _snackBar: MatSnackBar) {
      this.activeUser = this.tokenService.getUser();
    }

  ngOnInit(): void {
    this.collectionService.getCollectionsByUser(this.activeUser.id).subscribe(response => {this.collections=response});
  }

  saveRecipe() {

   // TODO: add function to save recipe to selected collection(s) (will be done on CS2020/372)
   
    let lilSnackMessage = 'Recipe has been saved!' 
    this._snackBar.open(lilSnackMessage, "", {
      duration: 2000,
      verticalPosition: this.verticalPosition,
      panelClass: ["custom-style"]
    });
    this.dr.close()
    }

    openCreateCollectionDialog(){
      const dialogRef = this.dialog.open(CreateCollectionsComponent);
    }
}
