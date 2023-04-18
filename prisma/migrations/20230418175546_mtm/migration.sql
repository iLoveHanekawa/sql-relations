-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsOnEmployee" (
    "employeeId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectsOnEmployee_pkey" PRIMARY KEY ("employeeId","projectId")
);

-- AddForeignKey
ALTER TABLE "ProjectsOnEmployee" ADD CONSTRAINT "ProjectsOnEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnEmployee" ADD CONSTRAINT "ProjectsOnEmployee_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
