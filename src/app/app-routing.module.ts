import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './routing/index/index.component';
import { AndreitaComponent } from './routing/andreita/andreita.component';
import { MarcoComponent } from './routing/marco/marco.component';
import { WirComponent } from './routing/wir/wir.component';

const routes: Routes = [
  { path: 'index',
    component: IndexComponent 
  },
  
  {
    path: 'Andreita',
    component: AndreitaComponent
  },

  {
    path: 'Marco',
    component: MarcoComponent
  },
  
  {
    path: 'Wir',
    component: WirComponent
  },

  { path: '**', 
  pathMatch: 'full', 
  redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
