import { NgModule } from '@angular/core';
//every angular need browser module
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  // array to declare and register
  declarations: [AppComponent, HeaderComponent, UserComponent],
  // the root component
  bootstrap: [AppComponent],
  //can be used for standalone components, browser module for browsing in chromes and needs to put in the start
  // pipes are automatically included in browser module
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
