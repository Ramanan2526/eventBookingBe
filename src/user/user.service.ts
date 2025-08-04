// src/user/user.service.ts
import { Injectable, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    try {
      const user = this.userRepo.create(dto);
      return await this.userRepo.save(user);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
