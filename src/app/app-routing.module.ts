import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaretaskComponent } from './caretask/caretask.component';
import { SomosComponent } from './somos/somos.component';

const routes: Routes = [
  { path: '', component: CaretaskComponent},
  { path: 'somos', component: SomosComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // scrollOffset: [0, 64],
    useHash: true, initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
