import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() weather: any;
  @Input() isLocationEnabled: boolean;
  @Input() locationError: boolean;

  constructor() {
    this.isLocationEnabled = false;
    this.locationError = false;
  }
}
