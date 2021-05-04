import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WeekComponent } from './week/week.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
	declarations: [AppComponent, SidenavComponent, WeekComponent, ToolbarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
