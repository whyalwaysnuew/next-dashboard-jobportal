-- This is an empty migration.
ALTER TABLE "Job" DROP COLUMN "datrPosted", ADD COLUMN "datePosted" DateTime;