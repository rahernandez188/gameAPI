import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppLoggerMiddleware } from './app.middleware';


@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([{name: 'GAME_MICROSERVICE', transport: Transport.TCP, options: { host: process.env.GAME_MICROSERVICE_HOST , port: 3001 } }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}