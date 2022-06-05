import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http:HttpClient) { }

  //GETs
  getPublicaciones():any{
    return this.http.get('https://insta-base-32-1954779-default-rtdb.firebaseio.com/publicaciones.json')
  }
  getDatosUsuario():any{
    return this.http.get('https://insta-base-32-1954779-default-rtdb.firebaseio.com/usuario.json')
  }
  getPublicacionesUsuario():any{
    return this.http.get('https://insta-base-32-1954779-default-rtdb.firebaseio.com/usuario/publicaciones.json')
  }

  getPublicacionDetalle(id: string): any {
    return this.http.get('https://insta-base-32-1954779-default-rtdb.firebaseio.com/usuario/publicaciones/'+ id +'.json')
  }

  getPublicacionesDetalle(id:number):any{
    return this.http.get('https://insta-base-32-1954779-default-rtdb.firebaseio.com/publicaciones/'+id+'.json')
  }

  //POST
  postPublicacion(id:number,post: any) {
    return this.http.put('https://insta-base-32-1954779-default-rtdb.firebaseio.com/publicaciones/'+id+'.json', post)
  }

  //DELETE
  deletePublicacion(id: number){
    return this.http.delete('https://insta-base-32-1954779-default-rtdb.firebaseio.com/publicaciones/'+id.toString()+'.json')
    //return this.http.delete('https://insta-base-32-1954779-rtdb.firebaseio.com/usuario/publicaciones.json', idPost)
  }
  //PUT 
  updatePublicacion(id: number,nuevosDatos: any) {
    return this.http.put('https://insta-base-32-1954779-default-rtdb.firebaseio.com/publicaciones/'+id.toString()+'.json', nuevosDatos)

  }
  updateBio(bio:any){
    return this.http.put('https://insta-base-32-1954779-default-rtdb.firebaseio.com/usuario.json',bio)
  }
}
