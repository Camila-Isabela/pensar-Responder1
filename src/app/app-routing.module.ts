import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'child1', loadChildren: () => import('./modulo1/child1.module').then(m => m.Child1Module) },
  { path: 'child2', loadChildren: () => import('./modulo2/child2.module').then(m => m.Child2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


