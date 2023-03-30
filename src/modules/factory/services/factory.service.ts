import { Injectable } from '@nestjs/common';
import { Factory } from '@prisma/client';
import { PrismaService } from '@shared/prisma.service';

@Injectable()
export class FactoryService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(params: { skip?: number; take?: number }): Promise<Factory[]> {
    return this.prisma.factory.findMany(params);
  }

  getById(id: string): Promise<Factory | null> {
    return this.prisma.factory.findUnique({
      where: { id },
    });
  }
}
