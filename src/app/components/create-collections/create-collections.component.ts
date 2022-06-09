import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { CollectionService } from 'src/app/services/collections.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Collection } from 'src/app/types/collection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/services/token.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Component({
  selector: 'app-create-collections',
  templateUrl: './create-collections.component.html',
  styleUrls: ['./create-collections.component.scss']
})
export class CreateCollectionsComponent implements OnInit {

  private readonly collectionSubject = new BehaviorSubject<Collection[]>([]);
  readonly collection$ = this.collectionSubject.asObservable();
  activeUser: User;
  newCollectionForm: FormGroup;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  collectionName: string;
  imageUrl: string;

  constructor(
    private http: HttpClient,
    public fb: FormBuilder,
    public validationService: ValidationService,
    public collectionService: CollectionService,
    private dr: MatDialogRef<CreateCollectionsComponent>,
    private _snackBar: MatSnackBar,
    public userService: UserService,
    public tokenService: TokenService
  ) {
    this.newCollectionForm = fb.group({
      collectionName: new FormControl('', [Validators.required], this.validationService.userNameValidator.bind(this.validationService)),
      imageUrl: new FormControl('', [Validators.required], this.validationService.userNameValidator.bind(this.validationService))
    })
    this.userService.getCurrentUser().subscribe((user:User) => this.activeUser = user)
  }

   
    private baseUrl: string = environment.apiUrl;
    private url: string; 

  ngOnInit(): void {
    this.url = this.baseUrl +"/profile/collections/user/"+this.tokenService.getUser().id;
  }


  get collection(): Collection[] {
    return this.collectionSubject.getValue();
  }

  set collection(collection: Collection[]) {
    this.collectionSubject.next(collection);
  }
  addCollection(message: string) {
    if (this.newCollectionForm.valid){
      this.collectionService.addCollection({
        id: null,
        collectionName: this.newCollectionForm.get("collectionName").value,
        recipeList: null,
        imageUrl:this.newCollectionForm.get("imageUrl").value,
        userId: +this.activeUser.id,
      });
      let collectionName = this.newCollectionForm.get("collectionName").value;
      let imageUrl = this.newCollectionForm.get("imageUrl").value;
    let lilSnackMessage = 'Collection "' + collectionName + '" has been created!'
    this._snackBar.open(lilSnackMessage, "", {
      duration: 2000,
      verticalPosition: this.verticalPosition,
      panelClass: ["custom-style"]
    });
    this.newCollectionForm.reset();
    this.dr.close()
    }
  }

}
