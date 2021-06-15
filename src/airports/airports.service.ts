import { Injectable } from '@nestjs/common';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

const airports = [
  {
    name: "Aeroporto de Uberlandia",
    code: "UDI",
    location: "Uberlandia"
  },
  {
    name: "Sao Paulo Internacional",
    code: "GRU",
    location: "São Paulo"
  },
  {
    name: "Rurópolis International Airport",
    code: "RUR",
    location: "Ruropolis"
  }
];

@Injectable()
export class AirportsService {
  create(createAirportDto: CreateAirportDto) {

    if(airports.findIndex(airport => airport.code === createAirportDto.code)){
      return 'Já existe esse código'
    }
    
    airports.push(createAirportDto);
    return createAirportDto;
  }

  findAll() {
    return airports;
  }

  findOne(code: string) {
    const airport = airports.findIndex(airport => airport.code === code);

    return airports[airport] || 'Não encontrado';
  }

  update(code: string, updateAirportDto: UpdateAirportDto) {
    const airport = airports.findIndex(airport => airport.code === code);

    if(airport >= 0) {

      airports[airport] = updateAirportDto;
      return airports[airport];
    }

    return 'Não encontrado';
  }

  remove(code: string) {
    const airport = airports.findIndex(airport => airport.code === code);
    if(airport >= 0) {
    
      airports.splice(airport, 1);
      return `This action removes a #${code} airport`;
    }

    return 'Não encontrado';
  }
}
