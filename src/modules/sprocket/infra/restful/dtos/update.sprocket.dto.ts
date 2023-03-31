import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateSprocketDTO {
  @ApiProperty({ required: false })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  teeth: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  pitchDiameter: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  outsideDiameter: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  pitch: number;
}
