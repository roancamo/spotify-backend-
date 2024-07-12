import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artista';
import { Cancion } from './canciones';
@Controller()
export class AppController {
  artistas: Artista[] =[];
  canciones: Cancion[] =[];
  constructor(private readonly appService: AppService) {
    let artista1  = new Artista(1,'green day','ninguna','banda','usa',['punk', 'rock'],5000 );
     this.artistas.push(artista1);
    this.canciones.push(new Cancion(  1, 'basket case','insomniac',artista1, ['punk'],45252,140));
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('artistas')
  obtenerArtistas(): Artista[]{
  
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

}
//http://localhost:3000/artistas
//
//http://localhost:3000/artista
