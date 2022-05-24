import { Body, Controller, Get, Param, Post, Put, Delete, Res,  HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('game')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get(':id')
  async getById(@Res() response, @Param('id') id: number) {
    let serviceResponse = await this.appService.getGameById(id);
    let status = HttpStatus.OK;
    if(serviceResponse.id == 0){
      status = HttpStatus.NOT_FOUND;
    }

    return response.status(status).json(serviceResponse);
    
  }

  @Get(':id/publisher')
  async getGamePublisher(@Res() response, @Param('id') id: number){
    let serviceResponse = await this.appService.getGamePublisher(id);
    let status = HttpStatus.OK;
    if(serviceResponse.id == 0){
      status = HttpStatus.NOT_FOUND;
    }

    return response.status(status).json(serviceResponse);
  }

  @Post()
  async create(@Body() createGameDto){
    return await this.appService.createGame(createGameDto);
  }

  @Put(':id')
  async updateById(@Param('id') id: number, @Body() gameDto ){
    return await this.appService.updateGameById(id, gameDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number){
    return await this.appService.deleteGameById(id);
  }


  @Post('retire')
  async retireAndDiscount(){
    return await this.appService.retireAndDiscount();
  }

}
