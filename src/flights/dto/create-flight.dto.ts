import { Airport } from '../../airports/entities/airport.entity';

export class CreateFlightDto {
  code: string;
  start: Airport;
  end: Airport;
  capacity: number;
  departureTime: string;
  arrivalTime: string;
  tax: number;
  price: number;
}
