import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

import { TabsComponent } from './tabs/tabs.component';

import { PublicacionComponent } from './publicacion/publicacion.component';
import { PopoverContenidoComponent } from './popover-contenido/popover-contenido.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaContenidoComponent } from './historia-contenido/historia-contenido.component';
import { PopoverComponent } from './popover/popover.component';
import { PostComponent } from './post/post.component';
import { FeedDetalleComponent } from './feed-detalle/feed-detalle.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
//WIP
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp , provideFirebaseApp} from '@angular/fire/app';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import {provideFirestore} from '@angular/fire/firestore';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    TabsComponent,
    PublicacionComponent,
    PublicacionesComponent,
    PopoverContenidoComponent,
    HistoriasComponent,
    HistoriaContenidoComponent,
    PopoverComponent,
    PostComponent,
    FeedDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireDatabaseModule,
    HttpClientModule,
    RoutesModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireDatabaseModule,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent], 
  exports: [RoutesModule]
})
export class AppModule { }
