import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() forecast: any;
  @Input() isLocationEnabled: boolean;
  @Input() locationError: boolean;

  constructor() {
    this.isLocationEnabled = false;
    this.locationError = false;
  }

  public isOpen = false;

  ngOnInit(): void {
  }
  toDate(timestamp: number): Date{
    return new Date(timestamp * 1000);
  }

}
