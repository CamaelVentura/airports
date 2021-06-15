import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AirportsModule } from './airports/airports.module';
import { FlightsModule } from './flights/flights.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [UsersModule, AirportsModule, FlightsModule, TicketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
