import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup,NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';

import { CamaraService } from '../photo.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private bd : BdServiceService, public tomarFoto: CamaraService) { }

  ngOnInit(): void {
  }
 
  onSubmit() {
    this.subir();
  }
 


  caption: string = "";
  id:string = "";
  src: string = "";
  newPost : any = {
    "caption": "", 
    "id": "", 
    "src": "assets/battinson.jpg", 
    "usuario": "@RiddlerSucks"
  }
  crearID(largo: number) {                               //Función que genera cadenas aleatorias
    let resultado          = '';
    let caracteres       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let CaracteresLargo = caracteres.length;
    for ( let i = 0; i < largo; i++ ) {
      resultado += caracteres.charAt(Math.floor(Math.random() * CaracteresLargo));
    }
    return resultado;
  }

  /*nuevoPost =  new FormGroup({
    caption: new FormControl(''),
    usuario: new FormControl(''),
    imagen: new FormControl('')

  })*/
  idNuevo: number = 0;
  subir() {
    this.newPost["caption"] = this.caption;
    this.newPost["id"] = this.crearID(5);
    
  
    console.log("Soy la foto xD"+Object.values(this.newPost['src']))
    let hola: any = {};
    let x: number = 0;
    this.bd.getPublicaciones().subscribe( res => {
      let identificacion2: number = 0;
      [].forEach.call(res, (index) =>{
        
        console.log(x);
        x = x +1;
        
        console.log(identificacion2)
      })
    identificacion2 = x;
    this.idNuevo = identificacion2;
    console.log("Soy el id que buscaban:"+this.idNuevo)
    this.bd.postPublicacion(this.idNuevo,this.newPost).subscribe(res => {console.log(res)})
    })


  }



  foto(){
    this.tomarFoto.addNewToGallery();
    console.log(this.tomarFoto.fotos[1])
  }
}
