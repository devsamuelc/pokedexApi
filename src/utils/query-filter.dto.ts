import { IsOptional } from 'class-validator';

export class QueryFilterDto {
  @IsOptional()
  page: number;

  @IsOptional()
  offset: number;

  @IsOptional()
  limit: number;

  @IsOptional()
  order: string;
}
