import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TesterModule } from './tester/tester.module';
import { TesterComponent } from './tester/tester.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TesterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
