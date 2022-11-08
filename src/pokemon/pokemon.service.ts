import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { FindAllPokemonDto } from './dto/find-all-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import * as bluebird from 'bluebird';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(params: any) {
    try {
      const query = [
        `INSERT INTO public.pokemon ("name", image, generation, evolution_stage, has_evolved, family_id, cross_gen, primary_type, secondary_type, primary_weather, secondary_weather, stat_total, atk, def, sta, is_legendary, is_aquireable, spawns, is_regional, is_raidable, is_hatchable, has_shiny, has_nest, is_new, is_non_gettable, future_evolve, full_cp_40, full_cp_39, "number") VALUES `,
      ];

      const inserts = [];

      bluebird
        .mapSeries(params, (pokemon) => {
          const queryBuilder = `('${pokemon.name}', '${pokemon.image}', '${pokemon.generation}', '${pokemon.evolutionStage}', ${pokemon.evolved}, ${pokemon.familyId}, ${pokemon.crossGen},'${pokemon.primaryType}', '${pokemon.secondaryType}', '${pokemon.primaryWeather}', '${pokemon.secondaryWeather}', ${pokemon.statTotal}, ${pokemon.atk}, ${pokemon.def}, ${pokemon.sta}, ${pokemon.legendary}, ${pokemon.aquireable}, ${pokemon.spawns}, ${pokemon.regional}, ${pokemon.raidable}, ${pokemon.hatchable}, ${pokemon.shiny}, ${pokemon.nest}, ${pokemon.isNew}, ${pokemon.nonGettable}, ${pokemon.futureEvolve}, ${pokemon.fullCp40}, ${pokemon.fullCp39}, ${pokemon.number}), `;

          inserts.push(queryBuilder);
        })
        .then(() => {
          const concatedQuery = query.concat(inserts).join('');

          const removeLastComma = concatedQuery.substring(
            0,
            concatedQuery.length - 2,
          );

          return this.dataSource.query(removeLastComma);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const query = this.pokemonRepository.find();

      return query;
    } catch (error) {
      return error.message;
    }
  }

  async findBySearchParams(findPokemonDto: FindAllPokemonDto) {
    try {
      // const { limit = 10, offset = 0, page = 0 } = filter;
      // const query = this.pokemonRepository.findAndCount({
      //   where: { ...(findPokemonDto || {}) },
      // });
      // return {
      //   pokemon: query,
      // };
    } catch (error) {
      return error.message;
    }
  }

  async findByPokedexNumber(number: number) {
    try {
      const pokemon = await this.pokemonRepository.findOne({
        where: { number },
      });

      return pokemon;
    } catch (error) {
      return error;
    }
  }
}
