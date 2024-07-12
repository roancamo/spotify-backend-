export class Cancion{

    constructor(public id:number, public nombre:string, public idArtista:number,  public album: string,public generoMusical: string[],
        public reproducciones: number, public duracion:number
    ){
        
    }
}