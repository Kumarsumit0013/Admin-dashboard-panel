import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  sideBarOpen = true;

  ngOnInit() {}

  toggleSidebar(obj: Event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
