import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactoryService } from '../../services/factory.service';
import { GetAllQueryStringDTO } from './dtos/get-all-query-string.dto';

@ApiTags('factories')
@Controller('factories')
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) {}

  @Get()
  getAll(@Query() query: GetAllQueryStringDTO) {
    return this.factoryService.getAll(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.factoryService.getById(id);
  }
}
