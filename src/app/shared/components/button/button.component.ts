import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() childIsDisabled: boolean;
  @Input() class: string;

  @Output() clickEvent = new EventEmitter<any>();
  onClickButton(event) {
    this.clickEvent.emit(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
