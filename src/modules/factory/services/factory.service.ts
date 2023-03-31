import { Injectable } from '@nestjs/common';
import { Factory } from '@prisma/client';
import { PrismaService } from '@shared/prisma.service';

@Injectable()
export class FactoryService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(params: { skip?: number; take?: number }): Promise<Factory[]> {
    return this.prisma.factory.findMany({
      skip: params?.skip ? Number(params?.skip) : 0,
      take: params?.take ? Number(params?.take) : 50,
      include: this.includeFields(),
    });
  }

  getById(id: string): Promise<Factory | null> {
    return this.prisma.factory.findUnique({
      where: { id },
      include: this.includeFields(),
    });
  }

  private includeFields() {
    return {
      productionActual: {
        select: {
          devTime: true,
          sprocket: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      productionGoal: {
        select: {
          devTime: true,
          sprocket: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    };
  }
}
