import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModule} from './services.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesModule.forRoot(),
  ]
})
export class CoreModule {}
