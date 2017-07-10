import {Component, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  @HostBinding('class.active') active;

  constructor() {}

  /** Toggles the categories select panel between open and closed. */
  toggle(): void {
    this.active ? this.close() : this.open();
  }

  /** Opens the categories select panel. */
  open(): void {
    if (!this.active) {
      this.active = !this.active;
    }
  }

  /** Closes the categories select panel. */
  close(): void {
    if (this.active) {
      this.active = !this.active;
    }
  }

  @HostListener('focusout', ['$event'])
  private onFocusOut(): void {
    this.close();
  }
}
