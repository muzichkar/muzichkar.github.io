import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lessons02Component } from './lessons02/lessons02.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { ChildComponent } from './lesson3/child/child.component';
import { HomeWork04Component } from './home-work04/home-work04.component';
import { SearchPipe } from './home-work04/search.pipe';
import { SortPipe } from './home-work04/sort.pipe';

@NgModule({
	declarations: [
		AppComponent,
		Lessons02Component,
  Lesson3Component,
  ChildComponent,
  HomeWork04Component,
  SearchPipe,
  SortPipe,

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
