import { User } from '../../users/entities/user.entity'

export class CreateTicketDto {
  code: string;
  user: User;
}
