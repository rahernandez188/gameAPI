import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Publisher } from './publisher.entity'

@Entity({name: "Game"})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  //@ManyToOne(type => Publisher, publisher => publisher.id)
  //@JoinColumn({name: "publisher"})
  @Column()
  publisher: number;

  @Column()
  tags: string;

  @Column()
  releaseDate: string;

  

}