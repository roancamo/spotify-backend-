import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artista';
import { Cancion } from './canciones';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
   artistas: Artista[] =[];
   canciones: Cancion[] =[];
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('artistas')
  obtenerArtistas(): Artista[]{
   // this.artistas.push(new Artista(1,'green day','ninguna','banda','usa',['punk', 'rock'],5000 ));
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
    this.canciones.push(new Cancion(  1, 'basket case',1,'insomniac',['punk'],150000,350));
    console.log(this.canciones);
    return this.canciones;
  }

}
//http://localhost:3000/artistas
//
//http://localhost:3000/artista
