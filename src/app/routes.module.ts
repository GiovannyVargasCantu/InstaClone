import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedDetalleComponent } from './feed-detalle/feed-detalle.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';


import { PublicacionComponent } from './publicacion/publicacion.component';

const rutas: Routes = [  
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent},
  {path: 'publicacion/:id', component: PublicacionComponent},
  {path: 'post',component: PostComponent},
  {path: 'feedDetalle/:id',component: FeedDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class RoutesModule { 
  
}