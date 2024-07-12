import { Artista } from "./artista";

export class Cancion{

    constructor(
        public id:number, 
        public nombre:string,
        public album: string,
        public artista: Artista,
        public generoMusical:  string[],
        public reproducciones: number,
        public duracion: number
  
    ){
        
    }
}