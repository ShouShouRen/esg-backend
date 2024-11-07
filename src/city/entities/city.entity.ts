import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('city_entity')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  value: string;
}
