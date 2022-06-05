import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-feed-detalle',
  templateUrl: './feed-detalle.component.html',
  styleUrls: ['./feed-detalle.component.css']
})
export class FeedDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private bd: BdServiceService) { }
  identificacion=this.ruta.snapshot.params['id'];
  identificacion3: number = 0;
  feedImprimir:any={}; 
    
  feed = [{
    caption: "unos perrillos....",
    comentario: "Hello World!",
    id: "19123214",
    imagen: "assets/perritounospelillos.jpeg",
    src: "assets/perritounospelillos.jpeg",
    usuario: "@unosperrillos",
  },
  {
    caption: "Me da amsiedad :( ",
    comentario: "Hola Mundo!",
    id: "asdasdaszzz",
    imagen: "assets/perroansiedad.jpeg",
    src: "assets/perroansiedad.jpeg",
    usuario: "@amsiedad",
  }]

  ngOnInit(): void {
    //this.obtenerPublicacionDPublicacion(this.feeds)
    //Idea para el detalle de un compañero (Idea no es mia)
    let hola: any = {};
    let x: number = 0;
    console.log("Matricula que busco: "+this.identificacion)
    this.bd.getPublicaciones().subscribe( res => {
      let identificacion2: number = 0;
      [].forEach.call(res, (index) =>{
        
        if(index != null ){
          hola = Object.values(index);
          console.log(hola[1]+" es igual a "+this.identificacion)
         if(hola[1] === this.identificacion){
           let y: number = x 
           identificacion2 = y;
           console.log(identificacion2)
           this.identificacion = identificacion2
         }
        }
        console.log(x);
        x = x +1;
        
        console.log(identificacion2)
      })
    this.identificacion3 = identificacion2;
    console.log("Soy el id que buscaban:"+this.identificacion3)
    this.bd.getPublicacionesDetalle(this.identificacion3).subscribe(res => {
      console.log(res);
      let feeds = Object.assign(res);
      this.feedImprimir = Object.assign(feeds);
      
      //this.alumnoNuevosDatos = this.alumnoDetalle;
    })
    })

   
  
   
  }
  feeds : any = [];
  aux : any = [];
  
  /*obtenerPublicacionDPublicacion(id:string){
    for(let x=0;x<this.feed.length;x++){
      if(id == this.feed[x].id){
        this.feedImprimir = this.feed[x];

      }
    }
    return this.feedImprimir;
  }*/
}

