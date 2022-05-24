import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable} from 'rxjs';


@Injectable()
export class AppService {

  constructor( @Inject('GAME_MICROSERVICE') private readonly client: ClientProxy){}

   async getGameById(id: number){
    return await this.client.send({role: 'game', cmd: 'get-game-by-id'}, id).toPromise();
  }

   async getGamePublisher(id: number){
    return await this.client.send({role: 'game', cmd: 'get-game-publisher'}, id).toPromise();
  }

  async createGame(createGameDto){
    return await this.client.send({role: 'game', cmd: 'create-game'}, createGameDto).toPromise();

  }

  async updateGameById(id: number, updateGameDto){
    updateGameDto.id = id;
    return await this.client.send({role: 'game', cmd: 'update-game-by-id'}, updateGameDto).toPromise();

  }

  async deleteGameById(id: number){
    return await this.client.send({role: 'game', cmd: 'delete-game-by-id'}, id).toPromise();
  }


  async retireAndDiscount(){
    return await this.client.send({role: 'game', cmd: 'retire-and-discount'}, {}).toPromise();
  }
  
}
