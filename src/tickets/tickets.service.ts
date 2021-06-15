import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

const eTickets = [];

@Injectable()
export class TicketsService {
  create(createTicketDto: CreateTicketDto) {
    const code = `${createTicketDto.flight.code}:${Date.now()}`;

    const newETicket = {
      ...createTicketDto,
      code,
    };

    eTickets.push(newETicket);
    return newETicket;
  }

  findAll() {
    return eTickets;
  }

  findOne(code: string) {
    const eTicket = eTickets.findIndex((eTicket) => eTicket.code === code);

    return eTickets[eTicket] || 'Não encontrado';
  }

  update(code: string, updateTicketDto: UpdateTicketDto) {
    const eTicket = eTickets.findIndex((eTicket) => eTicket.code === code);

    if (eTicket >= 0) {
      eTickets[eTicket] = updateTicketDto;
      return eTickets[eTicket];
    }

    return 'Não encontrado';
  }

  remove(code: string) {
    const eTicket = eTickets.findIndex((eTicket) => eTicket.code === code);

    if (eTicket >= 0) {
      eTickets.splice(eTicket, 1);
      return `This action removes a #${code} ticket`;
    }

    return 'Não encontrado';
  }
}
