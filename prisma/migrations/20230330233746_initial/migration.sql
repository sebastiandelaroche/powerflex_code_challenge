-- CreateTable
CREATE TABLE "Sprocket" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teeth" INTEGER NOT NULL,
    "pitchDiameter" INTEGER NOT NULL,
    "outsideDiameter" INTEGER NOT NULL,
    "pitch" INTEGER NOT NULL,

    CONSTRAINT "Sprocket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pitch_diameter" INTEGER NOT NULL,
    "outside_diameter" INTEGER NOT NULL,
    "pitch" INTEGER NOT NULL,

    CONSTRAINT "Factory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SprocketOnFactoryProduction" (
    "devTime" TIMESTAMP(3) NOT NULL,
    "sprocketId" TEXT NOT NULL,
    "factoryId" TEXT NOT NULL,

    CONSTRAINT "SprocketOnFactoryProduction_pkey" PRIMARY KEY ("sprocketId","factoryId")
);

-- CreateTable
CREATE TABLE "SprocketOnFactoryGoal" (
    "devTime" TIMESTAMP(3) NOT NULL,
    "sprocketId" TEXT NOT NULL,
    "factoryId" TEXT NOT NULL,

    CONSTRAINT "SprocketOnFactoryGoal_pkey" PRIMARY KEY ("sprocketId","factoryId")
);

-- AddForeignKey
ALTER TABLE "SprocketOnFactoryProduction" ADD CONSTRAINT "SprocketOnFactoryProduction_sprocketId_fkey" FOREIGN KEY ("sprocketId") REFERENCES "Sprocket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SprocketOnFactoryProduction" ADD CONSTRAINT "SprocketOnFactoryProduction_factoryId_fkey" FOREIGN KEY ("factoryId") REFERENCES "Factory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SprocketOnFactoryGoal" ADD CONSTRAINT "SprocketOnFactoryGoal_sprocketId_fkey" FOREIGN KEY ("sprocketId") REFERENCES "Sprocket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SprocketOnFactoryGoal" ADD CONSTRAINT "SprocketOnFactoryGoal_factoryId_fkey" FOREIGN KEY ("factoryId") REFERENCES "Factory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
