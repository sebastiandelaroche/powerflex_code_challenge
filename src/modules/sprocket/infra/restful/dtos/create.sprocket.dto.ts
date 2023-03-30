import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsPositive } from 'class-validator';

export class CreateSprocketDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  teeth: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  pitchDiameter: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  outsideDiameter: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  pitch: number;
}
