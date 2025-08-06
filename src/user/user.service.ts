// src/user/user.service.ts
import { Injectable, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

async create(dto: CreateUserDto) {
  try {
    const { password, ...userData } = dto;    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const user = this.userRepo.create({
      ...userData,
      password: hashedPassword,
    });
    
    const result = await this.userRepo.save(user);
    
    if (result) {
      return {
        message: "User created successfully"
      };
    }
  } catch (error) {
    throw new InternalServerErrorException('Something went wrong');
  }
}
}
