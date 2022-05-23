import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AppService {

  constructor( @Inject('GAME_MICROSERVICE') private readonly client: ClientProxy){}

  getGameById(id: number){
    return this.client.send({role: 'game', cmd: 'get-game-by-id'}, id);
  }

  getGamePublisher(id: number){
    return this.client.send({role: 'game', cmd: 'get-game-publisher'}, id);
  }

  createGame(createGameDto){
    return this.client.send({role: 'game', cmd: 'create-game'}, createGameDto);

  }

  updateGameById(id: number, updateGameDto){
    updateGameDto.id = id;
    console.log("App service:", updateGameDto);
    return this.client.send({role: 'game', cmd: 'update-game-by-id'}, updateGameDto);

  }

  deleteGameById(id: number){
    return this.client.send({role: 'game', cmd: 'delete-game-by-id'}, id);
  }


  retireAndDiscount(){
    return this.client.send({role: 'game', cmd: 'retire-and-discount'}, {});
  }
  
}
