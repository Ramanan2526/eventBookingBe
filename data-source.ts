// data-source.ts (in root)
import { DataSource } from 'typeorm';
import { User } from './src/user/entities/user.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'krishna_001',
  database: 'Eventbooking',
  entities: [User],
  migrations: ['dist/migrations/*.js'],
});
