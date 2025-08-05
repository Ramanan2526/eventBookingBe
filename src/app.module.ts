// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { OrganizerModule } from './organizer/organizer.module';
import { EventsModule } from './events/events.module';

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
      migrations: ['dist/migrations/*.ts'],
      synchronize: false, // Turned off to use migrations
      migrationsRun: true,
    }),
    UserModule,
    OrganizerModule,
    EventsModule,
  ],
})
export class AppModule {}
