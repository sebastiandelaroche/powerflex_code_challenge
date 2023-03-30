import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/prisma.service';
import { SprocketController } from './infra/restful/sprocket.controller';
import { SprocketService } from './services/sprocket.service';

@Module({
  imports: [],
  controllers: [SprocketController],
  providers: [PrismaService, SprocketService],
})
export class SprocketModule {}
