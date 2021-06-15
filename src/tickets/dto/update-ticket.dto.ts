import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { Flight } from '../../flights/entities/flight.entity';
import { User } from '../../users/entities/user.entity'

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  flight: Flight;
  user: User;
}
