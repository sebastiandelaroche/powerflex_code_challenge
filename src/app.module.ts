import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/prisma.service';
import { FactoryModule } from './modules/factory/factory.module';
import { SprocketModule } from './modules/sprocket/sprocket.module';

@Module({
  imports: [FactoryModule, SprocketModule],
  providers: [PrismaService],
})
export class AppModule {}
