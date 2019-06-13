const excelToJson = require('convert-excel-to-json');
const path = require('path');
const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const result = excelToJson({
  sourceFile: path.resolve(__dirname, '..', 'migrator/tracker.xlsx'),
});

const createUsers = `
INSERT INTO "Users" ("id","name", "level", "createdAt", "updatedAt") VALUES (DEFAULT,$1, $2, $3, $4);
`;

const sheet1 = result.Sheet1;
sheet1.forEach((e) => {
  if (e.A) {
    pool.query(createUsers, [e.A, 'sims', new Date(), new Date()]);
    console.log(`Successfully created ${e.A}`);
  }
});
