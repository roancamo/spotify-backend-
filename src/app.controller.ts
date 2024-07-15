import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artista';
import { Cancion } from './canciones';
import { PlayList } from './playList';
@Controller()
export class AppController {
  artistas: Artista[] =[];
  canciones: Cancion[] =[];
  playlists: PlayList[] =[];
  constructor(private readonly appService: AppService) {
  //let artista1  = new Artista(1,'green day','ninguna','banda','usa',['punk', 'rock'],5000 );
   //  this.artistas.push(artista1);
   //  let canciuon1 = new Cancion(  1, 'basket case','insomniac',artista1, ['punk'],45252,140);
//     let canciuon2 = new Cancion(  2, 'brake','insomniac',artista1, ['punk'],45252,140);
  //  this.canciones.push(canciuon2);
//    this.playlists.push(new PlayList(1,'mi primera', new Date(), [canciuon1, canciuon2]));
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('artistas')
  obtenerArtistas(): Artista[]{
   // console.log(new Date());
    return this.artistas;
  }
  @Post('artistas')
  nuevoArtista( @Body() artista: Artista ):Artista{

    console.log(artista);
    this.artistas.push(artista);
    return null;
  }
  @Get('canciones')
  obtenerCancion(): Cancion[]{
  console.log(this.canciones);
    return this.canciones;
  }
  @Post('canciones')
  nuevaCancion( @Body() cancionn: Cancion ):Cancion{
    //console.log(cancion);
    this.canciones.push(cancionn);
    console.log(this.canciones);
    return null;
  }
  
  @Get('playlists')
  obtenerPlaylists(): PlayList[]{
  
    return this.playlists;
  }

  @Post('playlists')
  nuevaPlaylist( @Body() playlist: PlayList ):PlayList{

    console.log(playlist);
    this.playlists.push(playlist);
    return null;
  }

}
//http://localhost:3000/artistas
//
//http://localhost:3000/artista
