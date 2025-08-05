// data-source.ts (at project root)
import { DataSource } from 'typeorm';
import { User } from './src/user/entities/user.entity';
import { Event } from './src/events/entities/event.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'krishna_001',
  database: 'Eventbooking',
  entities: [User, Event],
  migrations: ['src/migrations/*.ts'],
});
