import { Injectable } from '@nestjs/common';
import { Prisma, Sprocket } from '@prisma/client';
import { PrismaService } from '@shared/prisma.service';

@Injectable()
export class SprocketService {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: string): Promise<Sprocket | null> {
    return this.prisma.sprocket.findUnique({
      where: { id },
    });
  }

  create(data: Prisma.SprocketCreateInput): Promise<Sprocket> {
    return this.prisma.sprocket.create({
      data,
    });
  }

  update(id: string, data: Prisma.SprocketUpdateInput): Promise<Sprocket> {
    return this.prisma.sprocket.update({
      data,
      where: { id },
    });
  }
}
