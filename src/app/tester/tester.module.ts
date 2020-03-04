import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterComponent } from './tester.component';
import { WebCamModule } from 'ack-angular-webcam';


@NgModule({
  declarations: [TesterComponent],
  imports: [
    CommonModule,
    WebCamModule
  ],
  exports:[TesterComponent]
})
export class TesterModule { }
