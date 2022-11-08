import { IsUUID, IsOptional } from 'class-validator';

export class FindAllPokemonDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsOptional()
  name: string;

  @IsOptional()
  number: number;

  @IsOptional()
  generation: string;

  @IsOptional()
  evolutionStage: string;

  @IsOptional()
  evolved: boolean;

  @IsOptional()
  familyId: number;

  @IsOptional()
  crossGen: boolean;

  @IsOptional()
  primaryType: string;

  @IsOptional()
  secondaryType: string;

  @IsOptional()
  primaryWeather: string;

  @IsOptional()
  secondaryWeather: string;

  @IsOptional()
  statTotal: number;

  @IsOptional()
  atk: number;

  @IsOptional()
  def: number;

  @IsOptional()
  sta: number;

  @IsOptional()
  legendary: boolean;

  @IsOptional()
  aquireable: boolean;

  @IsOptional()
  spawns: boolean;

  @IsOptional()
  regional: boolean;

  @IsOptional()
  raidable: boolean;

  @IsOptional()
  hatchable: boolean;

  @IsOptional()
  shiny: boolean;

  @IsOptional()
  nest: boolean;

  @IsOptional()
  isNew: boolean;

  @IsOptional()
  nonGettable: boolean;

  @IsOptional()
  futureEvolve: boolean;
}

export class FindAllPokemonResponseDto {
  pokemon: FindAllPokemonDto[];
}
