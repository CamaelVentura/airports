import { Airport } from '../../airports/entities/airport.entity';

export class Flight {
  code: string;
  start: Airport;
  end: Airport;
  capacity: number;
  departureTime: string;
  arrivalTime: string;
  tax: number;
  price: number;
}
