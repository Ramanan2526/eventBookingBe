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

  async create(dto: CreateUserDto) {
    try {
      const user = this.userRepo.create(dto);
      const result =  await this.userRepo.save(user);
    if(result){
      return {
        message: "User created successfully"
      };
    }
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
