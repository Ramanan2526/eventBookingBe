// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'krishna_001',
      database: 'Eventbooking',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*.js'],
      synchronize: false, // Turned off to use migrations
      migrationsRun: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
