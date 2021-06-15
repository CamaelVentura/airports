import { PartialType } from '@nestjs/mapped-types';
import { Airport } from '../../airports/entities/airport.entity';
import { CreateFlightDto } from './create-flight.dto';

export class UpdateFlightDto extends PartialType(CreateFlightDto) {
  code: string;
  start: Airport;
  end: Airport;
  capacity: number;
  departureTime: string;
  arrivalTime: string;
  tax: number;
  price: number;
}
