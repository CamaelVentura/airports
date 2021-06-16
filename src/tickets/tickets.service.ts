import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { FlightsService } from '../flights/flights.service';

const eTickets = [];
const flightsService = new FlightsService();

@Injectable()
export class TicketsService {
  create(createTicketDto: CreateTicketDto) {
    const code = `${createTicketDto.code}:${Date.now()}`;

    const flight = flightsService.findOne(createTicketDto.code);
    const { user } = createTicketDto;

    const newETicket = {
      flight,
      user,
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

    const flight = flightsService.findOne(updateTicketDto.code);
    const { user } = updateTicketDto;

    if (eTicket >= 0) {
      eTickets[eTicket] = {
        flight,
        user,
        code,
      };
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
