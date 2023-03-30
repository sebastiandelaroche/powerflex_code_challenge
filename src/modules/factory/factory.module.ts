import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/prisma.service';
import { FactoryController } from './infra/restful/factory.controller';
import { FactoryService } from './services/factory.service';

@Module({
  imports: [],
  controllers: [FactoryController],
  providers: [PrismaService, FactoryService],
})
export class FactoryModule {}
