import { Inject, Injectable } from '@nestjs/common';
import { type } from 'os';
import { Game } from './entities/game.entity';
import { GameRepository } from './repositories/game.repository';
import { PublisherRepository } from './repositories/publisher.repository';

@Injectable()
export class GameService {
  constructor(
    private readonly gameRepository: GameRepository,
    private readonly publisherRepository: PublisherRepository,
  ) {}

  getGameById(id: number) {
    return this.gameRepository.getGameById(id);
  }

  async getGamePublisher(id: number) {
    const game = await this.gameRepository.getGameById(id);
    const publisherId = game.publisher;
    const publisher = await this.publisherRepository.getPublisherById(
      publisherId,
    );
    return publisher;
  }

  async createGame(createGameDto) {
    return await this.gameRepository.insertGame(createGameDto);
  }

  async updateGameById(updateGameDto) {
    const id = updateGameDto.id;
    //delete updateGameDto.id;
    //console.log("game service id:", id, "updateGameDto:", updateGameDto);
    return await this.gameRepository.updateGame(id, updateGameDto);
  }

  async deleteGameById(id: number) {
    return await this.gameRepository.deleteGame(id);
  }

  async retireAndDiscount() {
    return await this.gameRepository.retireAndDiscount();
  }
}
