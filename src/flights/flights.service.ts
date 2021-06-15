import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

interface SearchMinorTax {
  departure: string;
  arrival: string;
}

const flights = [
  {
    code: "VOO-001",
    start: {
      name: "Aeroporto de Uberlandia",
      code: "UDI",
      location: "Uberlandia"
    },
    end: {
      name: "Sao Paulo Internacional",
      code: "GRU",
      location: "São Paulo"
    },
    departureTime: "2021-05-01 22:00",
    capacity: 50,
    arrivalTime: "2021-05-01 00:00",
    tax: 59.3,
    price: 230.0,
  },
  {
    code: "VOO-002",
    start: {
      name: "Sao Paulo Internacional",
      code: "GRU",
      location: "São Paulo"
    },
    end: {
      name: "Rurópolis International Airport",
      code: "RUR",
      location: "Ruropolis"
    },
    capacity: 50,
    departureTime: "2021-06-01 22:00",
    arrivalTime: "2021-06-02 00:00",
    tax: 50.3,
    price: 220.0,
  },
  {
    code: "VOO-003",
    start: {
      name: "Aeroporto de Uberlandia",
      code: "UDI",
      location: "Uberlandia"
    },
    end: {
      name: "Rurópolis International Airport",
      code: "RUR",
      location: "Ruropolis"
    },
    capacity: 50,
    departureTime: "2021-06-01 21:00",
    arrivalTime: "2021-06-02 00:00",
    tax: 30.3,
    price: 220.0,
  },
  {
    code: "VOO-004",
    start: {
      name: "Aeroporto de Uberlandia",
      code: "UDI",
      location: "Uberlandia"
    },
    end: {
      name: "Rurópolis International Airport",
      code: "RUR",
      location: "Ruropolis"
    },
    capacity: 50,
    departureTime: "2021-06-01 21:00",
    arrivalTime: "2021-06-02 00:00",
    tax: 0.3,
    price: 220.0,
  },
  {
    code: "VOO-005",
    start: {
      name: "Aeroporto de Uberlandia",
      code: "UDI",
      location: "Uberlandia"
    },
    end: {
      name: "Sao Paulo Internacional",
      code: "GRU",
      location: "São Paulo"
    },
    departureTime: "2021-05-01 22:00",
    capacity: 50,
    arrivalTime: "2021-05-01 00:00",
    tax: 25.3,
    price: 230.0,
  },
]

@Injectable()
export class FlightsService {
  create(createFlightDto: CreateFlightDto) {

    if(flights.findIndex(flight => flight.code === createFlightDto.code)){
      return 'Já existe esse código'
    }

    flights.push(createFlightDto);

    return createFlightDto;
  }

  findAll() {
    return flights;
  }

  findOne(code: string) {

    const flight = flights.findIndex(flight => flight.code === code);

    return flights[flight] || 'Não encontrado';
  }

  update(code: string, updateFlightDto: UpdateFlightDto) {
    
    const flight = flights.findIndex(flight => flight.code === code);

    if(flight >= 0) {

      flights[flight] = updateFlightDto;
      return flights[flight];
    }

    return 'Não encontrado';
  }

  remove(code: string) {

    const flight = flights.findIndex(flight => flight.code === code);

    if(flight >= 0) {
    
      flights.splice(flight, 1);
      return `This action removes a #${code} flight`;
    }

    return 'Não encontrado';
  }

  findByDepartureAirport(code: string) {

    const findedFlights = flights.filter(flight => flight.start.code.toUpperCase() === code.toUpperCase());

    return findedFlights;
  }

  findMinorTax(searchMinorTax: SearchMinorTax) {
    
    const { departure, arrival } = searchMinorTax;

    const findedFlights = flights.filter(flight => flight.start.code === departure && flight.end.code === arrival);

    return findedFlights.sort((a, b) => a.tax - b.tax);
  }

  findByDate(date: string) {

    const flightsOnDate = flights.filter(flight => flight.departureTime.split(" ")[0] === date);

    return flightsOnDate;
  }

}
