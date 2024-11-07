import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carbon_listing')
export class CarbonListing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2 })
  carbonAmount: number;

  @Column({ default: false })
  needStaff: boolean;

  @Column()
  contact: string;
}
