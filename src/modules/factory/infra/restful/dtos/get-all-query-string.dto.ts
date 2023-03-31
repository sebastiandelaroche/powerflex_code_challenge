import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetAllQueryStringDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  skip?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  take?: number;
}
