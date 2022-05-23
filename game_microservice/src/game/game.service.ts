import { Inject, Injectable } from '@nestjs/common';
import { Game } from './entities/game.entity';
import { GameRepository } from './repositories/game.repository';
import { PublisherRepository } from './repositories/publisher.repository';

@Injectable()
export class GameService {

  constructor( private readonly gameRepository: GameRepository, private readonly publisherRepository: PublisherRepository){}

  getGameById(id: number){
    console.log("Game service");
    return this.gameRepository.getGameById(id);
  }

  async getGamePublisher(id: number){
    const game = await this.gameRepository.getGameById(id);
    const publisherId = game.publisher;
    const publisher = await this.publisherRepository.getPublisherById(publisherId);
    console.log("publisher: ", publisher)
    return publisher;
  }

  createGame(createGameDto){
    // const game = new Game();
    // game.title = createGameDto.title;
    // game.price = createGameDto.price;
    // game.publisher = createGameDto.publisher;
    // game.tags = createGameDto.tags;
    // game.releaseDate = createGameDto.releaseDate;
    
    //return this.gameRepository.insertGame(game);
    return this.gameRepository.insertGame(createGameDto);

  }

  updateGameById(updateGameDto){
    let id = updateGameDto.id;
    //delete updateGameDto.id;
    console.log("game service id:", id, "updateGameDto:", updateGameDto);
    return this.gameRepository.updateGame(id, updateGameDto);    

  }

  deleteGameById(id: number){
    return this.gameRepository.deleteGame(id)
  }


  retireAndDiscount(){
    return this.gameRepository.retireAndDiscount();
  }
  
}
