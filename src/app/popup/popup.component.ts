import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @HostBinding('class.open') open;


  constructor() { }

  ngOnInit() {
  }

  toggleList() {
    this.open = !this.open;
  }

}
