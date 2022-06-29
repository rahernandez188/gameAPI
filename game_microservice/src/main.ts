import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

import { GameModule } from './game/game.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(GameModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3001,
    }
  });

  await app.listen();
}
bootstrap();
