import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'pokemon' })
export class PokemonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'number', nullable: false, unique: true })
  number: string;

  @Column({ name: 'image', nullable: false, unique: true })
  image: number;

  @Column({ name: 'generation', nullable: false })
  generation: number;

  @Column({ name: 'evolution_stage', nullable: false })
  evolutionStage: number;

  @Column({ name: 'evolved', nullable: false })
  evolved: boolean;

  @Column({ name: 'family_id', nullable: false })
  familyId: string;

  @Column({ name: 'cross_gen', nullable: false })
  crossGen: boolean;

  @Column({ name: 'primary_type', nullable: false })
  primaryType: string;

  @Column({ name: 'secondary_type', nullable: false })
  secondaryType: string;

  @Column({ name: 'primary_weather', nullable: false })
  primaryWeather: string;

  @Column({ name: 'secondary_weather', nullable: false })
  secondaryWeather: string;

  @Column({ name: 'stat_total', nullable: false })
  statTotal: number;

  @Column({ name: 'atk', nullable: false })
  atk: number;

  @Column({ name: 'def', nullable: false })
  def: number;

  @Column({ name: 'sta', nullable: false })
  sta: number;

  @Column({ name: 'isLegendary', nullable: false, default: false })
  legendary: boolean;

  @Column({ name: 'aquireable', nullable: false })
  aquireable: boolean;

  @Column({ name: 'spawns', nullable: false })
  spawns: boolean;

  @Column({ name: 'regional', nullable: false })
  regional: boolean;

  @Column({ name: 'raidable', nullable: false })
  raidable: boolean;

  @Column({ name: 'hatchable', nullable: false })
  hatchable: boolean;

  @Column({ name: 'shiny', nullable: false })
  shiny: boolean;

  @Column({ name: 'nest', nullable: false })
  nest: boolean;

  @Column({ name: 'new', nullable: false })
  new: boolean;

  @Column({ name: 'non_gettable', nullable: false })
  nonGettable: boolean;

  @Column({ name: 'future_evolve', nullable: false })
  futureEvolve: boolean;

  @Column({ name: 'full_cp_40', nullable: false })
  fullCp40: number;

  @Column({ name: 'full_cp_39', nullable: false })
  fullCp39: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
