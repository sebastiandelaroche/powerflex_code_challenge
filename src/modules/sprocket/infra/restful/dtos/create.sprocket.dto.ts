import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateSprocketDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  teeth: number;

  @ApiProperty()
  @IsInt()
  pitchDiameter: number;

  @ApiProperty()
  @IsInt()
  outsideDiameter: number;

  @ApiProperty()
  @IsInt()
  pitch: number;
}
