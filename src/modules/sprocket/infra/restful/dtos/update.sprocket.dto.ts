import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdateSprocketDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsPositive()
  @IsOptional()
  @IsInt()
  teeth: number;

  @ApiProperty({ required: false })
  @IsPositive()
  @IsOptional()
  @IsInt()
  pitchDiameter: number;

  @ApiProperty({ required: false })
  @IsPositive()
  @IsOptional()
  @IsInt()
  outsideDiameter: number;

  @ApiProperty({ required: false })
  @IsPositive()
  @IsOptional()
  @IsInt()
  pitch: number;
}
