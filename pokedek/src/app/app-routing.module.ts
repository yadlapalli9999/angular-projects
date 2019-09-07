import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokeAddComponent } from './poke-add/poke-add.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-poke',component:PokeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
