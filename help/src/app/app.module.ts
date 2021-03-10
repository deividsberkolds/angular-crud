import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { NosidebarModule } from './layouts/nosidebar/nosidebar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DefaultModule, NosidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
