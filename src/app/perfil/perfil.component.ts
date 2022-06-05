import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private http: HttpClient,private db:BdServiceService) { }

  ngOnInit(): void {
    this.getDatosUsuario();
  }

  usuario: any = {}

  editando = false;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarBio(): void {
    this.usuario.bio = this.bio
    this.db.updateBio(this.usuario).subscribe(res =>{
      console.log(this.usuario.descripcion)
    });
    this.toggleEditar();
  }  
  getDatosUsuario():void{
    this.http.get('https://insta-base-32-1954779-default-rtdb.firebaseio.com/usuario.json').subscribe(res => {
      console.log(res);
      this.usuario = res;
  })
  }
}
