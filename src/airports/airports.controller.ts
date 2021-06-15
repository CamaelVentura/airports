import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { FlightsService } from '../flights/flights.service';

const flightsService = new FlightsService();
@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Post()
  create(@Body() createAirportDto: CreateAirportDto) {
    return this.airportsService.create(createAirportDto);
  }

  @Get('all')
  findAll() {
    return this.airportsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.airportsService.findOne(code);
  }

  @Patch(':code')
  update(
    @Param('code') code: string,
    @Body() updateAirportDto: UpdateAirportDto,
  ) {
    return this.airportsService.update(code, updateAirportDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.airportsService.remove(code);
  }

  @Get('departure/:code')
  findByOrigin(@Param('code') code: string) {
    return flightsService.findByDepartureAirport(code);
  }
}
