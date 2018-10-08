import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'play', component: PlayComponent },
  { path: 'instructions', component: InstructionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
