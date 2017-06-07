import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @HostBinding('class.open') open;


  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  toggleList() {
    this.open = !this.open;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }
}
