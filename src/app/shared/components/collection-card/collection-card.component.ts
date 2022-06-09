import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from 'src/app/services/collections.service'
import { Collection } from 'src/app/types/collection';
//import { CreateCollectionComponent } from 'src/app/components/create-collections/create-collections.component'


@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent implements OnInit {

  newCollection: FormGroup;
  @Input() collection: Collection;
  @Input() recipe: Recipe;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  
  constructor(
    private formbuilder: FormBuilder,
    private collectionService: CollectionService
  ) { 
    this.newCollection = this.formbuilder.group({
      collectionName: new FormControl('', [Validators.required, Validators.maxLength(100)])
    })
  }

  ngOnInit(): void {
  }

  addCollection(event) {
    console.log(this.newCollection);
    if (this.newCollection.valid) {
      let collection = {
        "collectionName": this.newCollection.controls.collectionName.value,
      }
      this.collectionService.addCollection(collection);
    }
  }
}
