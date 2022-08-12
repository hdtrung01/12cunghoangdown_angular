import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'get-infor-user',
    loadChildren: () => import('./pages/get-infor-user/get-infor-user.module').then( m => m.GetInforUserPageModule)
  },
  {
    path: 'explain-zodiac',
    loadChildren: () => import('./pages/explain-zodiac/explain-zodiac.module').then( m => m.ExplainZodiacPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
