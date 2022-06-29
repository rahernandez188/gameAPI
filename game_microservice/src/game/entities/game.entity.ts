import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Publisher } from './publisher.entity';

@Entity({ name: 'Game' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @ManyToOne((type) => Publisher, (publisher) => publisher.id)
  @JoinColumn({ name: 'publisher' })
  publisher: Publisher;

  @Column()
  tags: string;

  @Column({ type: 'datetime', default: '1000-01-01 00:00:00' })
  releaseDate: string;
}
