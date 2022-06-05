import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { BdServiceService } from '../bd-service.service';
import { ActivatedRoute } from '@angular/router';
import { Publicacion } from '../publicaciones';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor( private db:BdServiceService, private popover: PopoverController,private route:ActivatedRoute) { }

  id: number = this.route.snapshot.params['index']
  identificacion: number = 0;

  ngOnInit(): void {
    this.cargarFeed();
    console.log("Pruebaa")
  }
 
  borrar(idPost:any)  {
    let hola: any = {};
    let x: number = 0;
    console.log("Matricula que busco: "+ idPost)
    this.db.getPublicaciones().subscribe( res => {
      let identificacion2: number = 0;
      [].forEach.call(res, (index) =>{
        
        if(index != null ){
          hola = Object.values(index);
          console.log(hola[1]+" es igual a "+ idPost)
         if(hola[1] === idPost){
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
    this.identificacion = identificacion2;
    console.log("Soy el id que buscaban:"+this.identificacion)
    this.db.deletePublicacion(this.identificacion).subscribe(res => {
      console.log(res);
     // this.cargarFeed();  
    })
    })
    

  }
  posts: Publicacion[] = [];

  isPopoverOpen: boolean = false;
  
  cargarFeed() {
    let checar: any = [];
    this.db.getPublicaciones().subscribe(res => {

    
     if(Object.keys(res).length > 1){
    
     [].forEach.call(res, (index)=>{
      
      if(!(index == null )){
        console.log(index);
        checar.push(index)
      }
    })
      
  }
  else{
    if(res != null){
      console.log(res);
      checar.push(res);
    }

  }
    console.log(checar);
    this.posts = checar;
    

    })
    
  }
  

  editando: boolean = false;

  editar(){
    this.editando = !this.editando;

  }

  guardar(idPost:any,nuevoCaption: any){
    let hola: any = {};
    let x: number = 0;
    console.log("Matricula que busco: "+idPost)
    this.db.getPublicaciones().subscribe( res => {
      let identificacion2: number = 0;
      [].forEach.call(res, (index) =>{
        
        if(index != null ){
          hola = Object.values(index);
          console.log(hola[1]+" es igual a "+ idPost)
         if(hola[1] === idPost){
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
    this.identificacion = identificacion2;
    console.log("Soy el id que buscaban:"+this.identificacion)
    this.db.updatePublicacion(this.identificacion, nuevoCaption).subscribe(res => {
      console.log("Se actualizo la base de datos");
      this.cargarFeed();
    })
    })
    

    this.editar();

  }

}
