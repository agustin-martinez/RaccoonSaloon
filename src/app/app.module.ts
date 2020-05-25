import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { TheClashComponent } from './the-clash/the-clash.component';
import { MenuComponent } from './the-clash/menu/menu.component';
import { TheUsualComponent } from './the-clash/the-usual/the-usual.component';

@NgModule({
	declarations: [
		AppComponent,
		TheClashComponent,
		MenuComponent,
		TheUsualComponent
	],
	imports: [
		BrowserModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
