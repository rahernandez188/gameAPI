import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}



  @MessagePattern({role: 'game', cmd: 'get-game-by-id'})
  getById(id: number){
    console.log('Getting:', id);
    return this.gameService.getGameById(id);
  }

  @MessagePattern({role: 'game', cmd: 'get-game-publisher'})
  getGamePublisher(id: number){
    return this.gameService.getGamePublisher(id);
  }


  @MessagePattern({role: 'game', cmd: 'create-game'})
  create(createGameDto){
    return this.gameService.createGame(createGameDto);
  }

  @MessagePattern({role: 'game', cmd: 'update-game-by-id'})
  updateById(gameDto ){
    return this.gameService.updateGameById(gameDto);
  }

  @MessagePattern({role: 'game', cmd: 'delete-game-by-id'})
  deleteById(id: number){
    return this.gameService.deleteGameById(id);
  }


  @MessagePattern({role: 'game', cmd: 'retire-and-discount'})
  retireAndDiscount(){
    return this.gameService.retireAndDiscount();
  }

}
