import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { map, get } from 'lodash/fp';

const prisma = new PrismaClient();

async function main() {
  await prisma.sprocket.createMany({
    data: [
      {
        name: faker.random.word(),
        teeth: faker.datatype.number(),
        pitchDiameter: faker.datatype.number(),
        outsideDiameter: faker.datatype.number(),
        pitch: faker.datatype.number(),
      },
      {
        name: faker.random.word(),
        teeth: faker.datatype.number(),
        pitchDiameter: faker.datatype.number(),
        outsideDiameter: faker.datatype.number(),
        pitch: faker.datatype.number(),
      },
      {
        name: faker.random.word(),
        teeth: faker.datatype.number(),
        pitchDiameter: faker.datatype.number(),
        outsideDiameter: faker.datatype.number(),
        pitch: faker.datatype.number(),
      },
      {
        name: faker.random.word(),
        teeth: faker.datatype.number(),
        pitchDiameter: faker.datatype.number(),
        outsideDiameter: faker.datatype.number(),
        pitch: faker.datatype.number(),
      },
      {
        name: faker.random.word(),
        teeth: faker.datatype.number(),
        pitchDiameter: faker.datatype.number(),
        outsideDiameter: faker.datatype.number(),
        pitch: faker.datatype.number(),
      },
    ],
  });

  const sprocketIds = await prisma.sprocket
    .findMany({
      select: { id: true },
    })
    .then<Array<string>>(map(get('id')));

  await prisma.factory.create({
    data: {
      name: faker.company.name(),
      productionActual: {
        createMany: {
          data: sprocketIds.map((sprocketId) => ({
            sprocketId,
            devTime: new Date(),
          })),
        },
      },
      productionGoal: {
        createMany: {
          data: sprocketIds.map((sprocketId) => ({
            sprocketId,
            devTime: new Date(),
          })),
        },
      },
    },
  });

  await prisma.factory.create({
    data: {
      name: faker.company.name(),
      productionActual: {
        createMany: {
          data: sprocketIds.map((sprocketId) => ({
            sprocketId,
            devTime: new Date(),
          })),
        },
      },
      productionGoal: {
        createMany: {
          data: sprocketIds.map((sprocketId) => ({
            sprocketId,
            devTime: new Date(),
          })),
        },
      },
    },
  });

  await prisma.factory.create({
    data: {
      name: faker.company.name(),
      productionActual: {
        createMany: {
          data: sprocketIds.map((sprocketId) => ({
            sprocketId,
            devTime: new Date(),
          })),
        },
      },
      productionGoal: {
        createMany: {
          data: sprocketIds.map((sprocketId) => ({
            sprocketId,
            devTime: new Date(),
          })),
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
