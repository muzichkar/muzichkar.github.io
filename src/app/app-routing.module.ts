import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserLisComponent } from './work/user-lis/user-lis.component';
import { TaskListComponent } from './work/task-list/task-list.component';





const routes: Routes = [
	{
		path: 'work', component: WorkComponent, children: [
			{ path: 'cenzor', component: CenzorComponent },
			{ path: 'user-lis', component: UserLisComponent },
			{ path: 'task-list', component: TaskListComponent }
		]
	},
	{ path: '', component: HomeComponent },



];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
