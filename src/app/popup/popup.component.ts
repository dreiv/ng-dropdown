import {Component, ElementRef, HostBinding} from '@angular/core';
import {Observable, Subscription} from "rxjs/rx";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  @HostBinding('class.open') open;
  private clickSub: Subscription;

  constructor(private elementRef: ElementRef) {
  }

  toggleList() {
    this.open = !this.open;

    if (this.open) {
      this.clickSub = Observable.fromEvent(window, 'click')
        .subscribe((event: Event) => {
          if (!this.elementRef.nativeElement.contains(event.target)) {
            console.log('triggered!');
            this.open = false;
            this.clickSub.unsubscribe();
          }
        })
    } else {
      if (this.clickSub) {
        this.clickSub.unsubscribe();
      }
    }
  }
}
