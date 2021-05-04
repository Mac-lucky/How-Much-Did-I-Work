import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekComponent } from './week/week.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'week', component: WeekComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
