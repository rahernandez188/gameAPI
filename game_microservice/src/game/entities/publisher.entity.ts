import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "Publisher"})
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  siret: string;

  @Column()
  phone: string;

}