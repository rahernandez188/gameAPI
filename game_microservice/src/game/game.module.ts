import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

import { GameController } from './game.controller';
import { GameService } from './game.service';
import { Game } from './entities/game.entity';
import { Publisher} from './entities/publisher.entity';
import { GameRepository } from './repositories/game.repository';
import { PublisherRepository } from './repositories/publisher.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Game, Publisher],
        synchronize: true,
      }),
    TypeOrmModule.forFeature([GameRepository, PublisherRepository, Game, Publisher])
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {
  constructor(private connection: Connection){

  }
}
