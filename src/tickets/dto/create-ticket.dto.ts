import { Flight } from '../../flights/entities/flight.entity';
import { User } from '../../users/entities/user.entity'

export class CreateTicketDto {
  flight: Flight;
  user: User;
}
