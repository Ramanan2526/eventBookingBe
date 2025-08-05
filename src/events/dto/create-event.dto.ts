import {
  IsString,
  IsDateString,
  IsOptional,
  IsInt,
  IsNumber,
  Min,
  MaxLength
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'Tech Conference 2025' })
  @IsString()
  @MaxLength(255)
  eventName: string;

  @ApiProperty({ example: '2025-09-10', description: 'Date of the event (YYYY-MM-DD)' })
  @IsDateString()
  eventDate: string;

  @ApiProperty({ example: '15:30', description: 'Time of the event (HH:mm)' })
  @IsString()
  eventTime: string;

  @ApiProperty({ example: 'Chennai Trade Center' })
  @IsString()
  @MaxLength(255)
  eventVenue: string;

  @ApiProperty({ example: 'A full-day tech conference with multiple workshops', required: false })
  @IsOptional()
  @IsString()
  eventDescription?: string;

  @ApiProperty({ example: 200 })
  @IsInt()
  @Min(0)
  availableTickets: number;

  @ApiProperty({ example: 499.99 })
  price: number;
}
