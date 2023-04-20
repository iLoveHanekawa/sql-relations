-- CreateTable
CREATE TABLE "Human" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Human_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendsOnEnemies" (
    "friendId" INTEGER NOT NULL,
    "enemyId" INTEGER NOT NULL,

    CONSTRAINT "FriendsOnEnemies_pkey" PRIMARY KEY ("friendId","enemyId")
);

-- AddForeignKey
ALTER TABLE "FriendsOnEnemies" ADD CONSTRAINT "FriendsOnEnemies_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "Human"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendsOnEnemies" ADD CONSTRAINT "FriendsOnEnemies_enemyId_fkey" FOREIGN KEY ("enemyId") REFERENCES "Human"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
