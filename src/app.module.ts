import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // corrected from 'localHost'
      port: 3306,
      username: 'root',
      password: 'krishna_001', // adjust if this is your actual password
      database: 'Eventbooking',  // make sure this DB exists
      entities:[User],
      synchronize: true,     // Only for dev, disable in prod
    }),
    TypeOrmModule.forFeature([]),
    UserModule,
  ],
})
export class AppModule {}
