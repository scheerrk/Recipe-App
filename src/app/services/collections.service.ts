import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Collection } from '../types/collection';
import { User } from '../types/user';
import { TokenService } from 'src/app/services/token.service';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class CollectionService {

  private url: string;
  private readonly collectionsSubject = new BehaviorSubject<Collection[]>([]);
  readonly collection$ = this.collectionsSubject.asObservable();

  constructor(private http: HttpClient, public tokenService:TokenService) {
    this.url = environment.apiUrl +"/profile/collections/user/"+this.tokenService.getUser().id;
    this.http.get(`${this.url}`).subscribe(s => {
      this.collectionsSubject.next(s as Collection[]);
    })
  }




  // GETTERS AND SETTERS

  getAllCollections(): Observable<Collection[]> {
    return this.http.get(this.url, httpOptions).pipe(map(response => {
      return response as Collection[];
    }))
  }

  getCollection(id: number): Observable<Collection> {
    return this.http.get(this.url + `/${id}`, httpOptions).pipe(map(response => {
      return response as Collection;
    }))
  }

  get collections(): Collection[] {
    return this.collectionsSubject.getValue();
  }

  set collections(collections: Collection[]) {
    this.collectionsSubject.next(collections);
  }

  // CRUD FUNCTIONS BELOW
  // addCollection(collection: Collection): void {
  //   console.log(collection)
  //   this.http.post(this.url, collection, httpOptions).subscribe((response: Collection) => {
  //     this.collections = [
  //       ...this.collections, response
  //     ]
  //     console.log("added collection: ", response);
  //   })
  // }

  // TODO Update collection function

  // deleteCollection(collectionId: number): void {
  //   this.http.delete(this.url + `/${collectionId}`, httpOptions).subscribe(response => {
  //     this.collectionsSubject.next(this.collections.filter(collection => collection.id !== collectionId));
  //   });
  // }

  getCollectionsByUser(userId: number) {
    return this.http.get(`${this.url}`, httpOptions).pipe(map(response => {
      this.collections = response as Collection[];
      return response as Collection[];
    }))
  }


  addCollection(collection: Collection): void {
    console.log(collection);
    this.http.post(`${this.url}`, collection, httpOptions).subscribe((response: Collection) => {
      this.collections = [
        ...this.collections,
        response
      ]
    });
  }

  // editCollection(collection: Collection): void {
  //   this.http.put(`${this.url}`, collection, httpOptions).subscribe((response) => {
  //     this.refreshCollection();
  //   });
  // }

  // removeCollection(collection: Collection): void {
  //   this.http.put(`${this.url}`, collection, httpOptions).subscribe((response) => {
  //     this.refreshCollection();
  //   });
  // }

  // refreshCollection(): void {
  //   this.http.get(`${this.url}`).subscribe(s => {
  //     this.collectionsSubject.next(s as Collection[]);
  //   });
  // }
}
