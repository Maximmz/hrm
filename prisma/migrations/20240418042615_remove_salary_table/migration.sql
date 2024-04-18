/*
  Warnings:

  - You are about to drop the `Salary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `salary` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Salary" DROP CONSTRAINT "Salary_employeeId_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "salary" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Salary";
