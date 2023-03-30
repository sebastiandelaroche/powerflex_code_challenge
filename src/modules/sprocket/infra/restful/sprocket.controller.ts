import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SprocketService } from '../../services/sprocket.service';
import { CreateSprocketDTO } from './dtos/create.sprocket.dto';
import { UpdateSprocketDTO } from './dtos/update.sprocket.dto';

@ApiTags('sprockets')
@Controller('sprockets')
export class SprocketController {
  constructor(private readonly sprocketService: SprocketService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.sprocketService.getById(id);
  }

  @Post()
  create(@Body() data: CreateSprocketDTO) {
    return this.sprocketService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateSprocketDTO) {
    return this.sprocketService.update(id, data);
  }
}
