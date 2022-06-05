import { Component } from '@angular/core';
import { BdServiceService } from './bd-service.service';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ionic-angular-1954779';
  total= 90;

  esCierto = true;

  imagenes = [
    "assets/perritounospelillos.jpeg",
    "assets/perritounospelillos.jpeg",
    "assets/perritounospelillos.jpeg",
    "assets/perritounospelillos.jpeg",
    "assets/perritounospelillos.jpeg"
  ];

  perfil = true;

  togglePerfil(): void {
    this.perfil = !this.perfil;
  }

  constructor(private bd: BdServiceService) {}

  usuario: string = "";
  avatar: string = "";

  ngOnInit(): void {
    this.bd.getDatosUsuario().subscribe(res => {
      console.log(res);
      
    })
  }
}
