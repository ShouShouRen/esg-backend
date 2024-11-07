import { UserRole } from '@/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({
    collation: 'utf8_bin', // 添加 collation 來確保大小寫敏感
  })
  email: string;

  @Column({
    collation: 'utf8_bin', // 添加 collation 來確保大小寫敏感
  })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
