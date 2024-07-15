import { Cancion } from "./canciones";
export class PlayList{
        constructor(
              public id: number,
              public nombre: string,
              public fechaCreacion: Date,
              public canciones: Cancion[]

        ){

        }

}