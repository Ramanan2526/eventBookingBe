import { User } from '../../user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  eventName: string;

  @Column({ type: 'date' })
  eventDate: Date;

  @Column({ type: 'time' })
  eventTime: string;

  @Column({ type: 'varchar', length: 255 })
  eventVenue: string;

  @Column({ type: 'text', nullable: true })
  eventDescription: string;

  @Column({ type: 'int', default: 0 })
  availableTickets: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.events)
  user: User;
}
