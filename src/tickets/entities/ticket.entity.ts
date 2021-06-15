import { Flight } from '../../flights/entities/flight.entity';
import { User } from '../../users/entities/user.entity'

export class Ticket {
  code: String;
  flight: Flight;
  user: User;
}
