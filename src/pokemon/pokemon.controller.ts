import { Req, Query, Controller, Get, Param } from '@nestjs/common';
import {
  FindAllPokemonDto,
  FindAllPokemonResponseDto,
} from './dto/find-all-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { QueryFilterDto } from 'src/utils/query-filter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findBySearchParams(
    @Req() req: any,
    @Query() query: FindAllPokemonDto,
    @Param() filter: QueryFilterDto,
  ): Promise<FindAllPokemonResponseDto> {
    return this.pokemonService.findBySearchParams(query);
  }

  @Get('all')
  findAll(): Promise<FindAllPokemonResponseDto> {
    return this.pokemonService.findAll();
  }

  @Get(':number')
  findByPokedexNumber(@Param('number') number: number) {
    return this.pokemonService.findByPokedexNumber(+number);
  }
}
