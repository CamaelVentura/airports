import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

interface SearchMinorTax {
  departure: string;
  arrival: string;
}

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.flightsService.findOne(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightsService.update(code, updateFlightDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.flightsService.remove(code);
  }

  @Post('search')
  findMinorTax(@Body() searchMinorTax: SearchMinorTax) {
    return this.flightsService.findMinorTax(searchMinorTax);
  }

  @Get('search/:date')
  findByDate(@Param('date') date: string) {
    return this.flightsService.findByDate(date);
  }
}
