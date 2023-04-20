-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "teacherId" INTEGER,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
