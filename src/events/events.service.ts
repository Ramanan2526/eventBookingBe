import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { paginate, PaginateQuery, Paginated } from 'nestjs-paginate';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private eventRepo: Repository<Event>,
              @InjectRepository(User) private userRepo: Repository<User>){}

  async createEvent(dto: CreateEventDto) {
  try {
    // const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    // if (!user) {
    //   throw new NotFoundException(`No user found with ID ${dto.userId}`);
    // }

    const event = this.eventRepo.create({
      ...dto,
      // user, // assign user relation
    });

    const savedEvent = await this.eventRepo.save(event);

    return {
      message: 'Event created successfully!',
      eventId: savedEvent.id, 
    };
  } catch (error) {
    throw new BadRequestException(error.message || 'Something went wrong');
  }
}

async getAll(query: PaginateQuery): Promise<Paginated<Event>> {
  return paginate(query, this.eventRepo, {
    sortableColumns: ['eventName', 'eventDate'],
    searchableColumns: ['eventName'],
    defaultSortBy: [['eventDate', 'DESC']],
    // where: { isDelete: false }, // optional
  });
}

}