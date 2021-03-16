import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { NosidebarModule } from './layouts/nosidebar/nosidebar.module';
import { DataFetchComponent } from './pages/data-fetch/data-fetch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DataFetchComponent],
  imports: [
    BrowserModule,
    DefaultModule,
    NosidebarModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
