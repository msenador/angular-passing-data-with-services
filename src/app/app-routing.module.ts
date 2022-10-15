import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { LandingComponent } from './landing/landing.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'child',
    component: ChildComponentComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
