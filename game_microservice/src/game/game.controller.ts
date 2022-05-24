import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}



  @MessagePattern({role: 'game', cmd: 'get-game-by-id'})
  async getById(id: number){
    return await this.gameService.getGameById(id);
  }

  @MessagePattern({role: 'game', cmd: 'get-game-publisher'})
  async getGamePublisher(id: number){
    return await this.gameService.getGamePublisher(id);
  }


  @MessagePattern({role: 'game', cmd: 'create-game'})
  async create(createGameDto){
    return await this.gameService.createGame(createGameDto);
  }

  @MessagePattern({role: 'game', cmd: 'update-game-by-id'})
  async updateById(gameDto ){
    return await this.gameService.updateGameById(gameDto);
  }

  @MessagePattern({role: 'game', cmd: 'delete-game-by-id'})
  async deleteById(id: number){
    return await this.gameService.deleteGameById(id);
  }


  @MessagePattern({role: 'game', cmd: 'retire-and-discount'})
  async retireAndDiscount(){
    return await this.gameService.retireAndDiscount();
  }

}
