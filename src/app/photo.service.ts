import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import  {Share} from '@capacitor/share';
import { Foto } from 'src/app/shared/foto';

@Injectable({
  providedIn: 'root'
})


export class CamaraService {

  constructor(
    
  ) { 
    
  }

  public fotos : Foto[] = [];
  

  private async readAsBase64(foto: Foto) { //Leer foto 
    const response = await fetch(foto.webviewPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  
  private async guardarFoto(foto: Foto) {
    // Convertir imagen a base 64 requerido para guardar en la galeria de fotos del cel
    const base64Data = await this.readAsBase64(foto);
  
    const nombreArchivo = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: nombreArchivo,
      data: base64Data,
      directory: Directory.Data
    });
  
    return {
      filepath: nombreArchivo,
      webviewPath: foto.webviewPath
    };
  }

  public async addNewToGallery() {
    // Tomar foto
    this.fotos= []
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100
    })


    const guardarImagen = await this.guardarFoto({
      filepath: "soon", 
      webviewPath: fotoCapturada.webPath
    });

    this.fotos.unshift(guardarImagen);
    
    
  }
  
}