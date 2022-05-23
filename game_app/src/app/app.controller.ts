import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('game')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get(':id')
  getById(@Param('id') id: number){
    console.log('Getting:', id);
    return this.appService.getGameById(id);
  }

  @Get(':id/publisher')
  getGamePublisher(@Param('id') id: number){
    return this.appService.getGamePublisher(id);
  }


  @Post()
  create(@Body() createGameDto){
    return this.appService.createGame(createGameDto);
  }

  @Put(':id')
  updateById(@Param('id') id: number, @Body() gameDto ){
    return this.appService.updateGameById(id, gameDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number){
    return this.appService.deleteGameById(id);
  }


  @Post('retire')
  retireAndDiscount(){
    return this.appService.retireAndDiscount();
  }

}
