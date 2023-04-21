-- CreateTable
CREATE TABLE "Instagram" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "altId" INTEGER,

    CONSTRAINT "Instagram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_follows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Instagram_altId_key" ON "Instagram"("altId");

-- CreateIndex
CREATE UNIQUE INDEX "_follows_AB_unique" ON "_follows"("A", "B");

-- CreateIndex
CREATE INDEX "_follows_B_index" ON "_follows"("B");

-- AddForeignKey
ALTER TABLE "Instagram" ADD CONSTRAINT "Instagram_altId_fkey" FOREIGN KEY ("altId") REFERENCES "Instagram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_follows" ADD CONSTRAINT "_follows_A_fkey" FOREIGN KEY ("A") REFERENCES "Instagram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_follows" ADD CONSTRAINT "_follows_B_fkey" FOREIGN KEY ("B") REFERENCES "Instagram"("id") ON DELETE CASCADE ON UPDATE CASCADE;
