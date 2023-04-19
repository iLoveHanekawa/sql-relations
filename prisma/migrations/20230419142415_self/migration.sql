-- CreateTable
CREATE TABLE "Node" (
    "id" SERIAL NOT NULL,
    "data" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Node_parentId_key" ON "Node"("parentId");

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Node"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
