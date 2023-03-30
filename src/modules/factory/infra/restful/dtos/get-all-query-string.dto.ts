import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsOptional } from 'class-validator';

export class GetAllQueryStringDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsPositive()
  @IsInt()
  skip?: number = 0;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPositive()
  @IsInt()
  take?: number = 10;
}
