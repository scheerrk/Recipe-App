import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  @Input() icon: string = "addwhite";
  @Input() buttonColor: string = "primary";

  constructor() { }

  ngOnInit(): void {
  }

  getIconUrl(): string{
    return `assets/images/${this.icon}.svg`
  }

}
