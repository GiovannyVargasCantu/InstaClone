import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private bd: BdServiceService) { }

  identificacion =this.ruta.snapshot.params['id'];
  publicacionImprimir:any={};
  publi:any={}; 
  aux: any={};
  ngOnInit(): void {
    this.bd.getPublicacionesUsuario().subscribe(res => {
      this.publi=res;
      this.aux=this.publi.findIndex(x => x.id == this.identificacion);
      this.bd.getPublicacionDetalle(this.aux).subscribe(res => {this.publicacionImprimir=res;})
    });
  }

  /*publicaciones = [
    {
      "id": "432dffds8", 
      "imagen": "assets/imagenes/1.png",

    }, 
    {
      "id": "432dffds8dlkfd", 
      "imagen": "assets/imagenes/2.png",

    }, 
    {
      "id": "3c", 
      "imagen": "assets/imagenes/3.png",

    }, 
    {
      "id": "2b", 
      "imagen": "assets/imagenes/4.png",

    }, 
    {
      "id": "1a", 
      "imagen": "assets/imagenes/5.png",

    },
    {
      "id": "aasdasdasdb", 
      "imagen": "assets/imagenes/6.png",

    }, 
    {
      "id": "2123123b", 
      "imagen": "assets/imagenes/7.png",

    }, 
    {
      "id": "2badfadsf", 
      "imagen": "assets/imagenes/8.png",

    }, 
    {
      "id": "2bdcxzcxc", 
      "imagen": "assets/imagenes/9.png",

    }, 
    {
      "id": "a123b", 
      "imagen": "assets/imagenes/10.png",

    }, 
    {
      "id": "2ba213", 
      "imagen": "assets/imagenes/11.png",

    }, 
    {
      "id": "2777b", 
      "imagen": "assets/imagenes/12.png",

    }
  ]
*/

}