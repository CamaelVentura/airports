import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { User } from '../../users/entities/user.entity'

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  flight: string;
  user: User;
}
