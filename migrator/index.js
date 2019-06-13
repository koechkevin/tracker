
const excelToJson = require('convert-excel-to-json');
const path = require('path');
const pg = require('pg');
const fs = require('fs');
const dotenv = require('dotenv');
const models = require('../src/database/models');

dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const result = excelToJson({
  sourceFile: path.resolve(__dirname, '..', 'migrator/tracker.xlsx'),
});

fs.writeFile('migrator/tracker.json', JSON.stringify(result), 'utf8', (err) => { if (err) throw err; });
const sheet1 = result.Sheet1;
const obj = {};
// eslint-disable-next-line no-plusplus


const resolveArray = (array) => {
  const x = {};
  array.forEach((e) => {
    const y = e.split('-');
    switch (y[0]) {
      case ' Response to slack ':
        x.response = parseInt(y[1], 10);
        break;
      case 'Begin conversations on slack channel ':
        x.channel = parseInt(y[1], 10);
        break;
      case ' Direct message ':
        x.dm = parseInt(y[1], 10);
        break;
      case ' MultiDM contribution ':
        x.multiDm = parseInt(y[1], 10);
        break;
      default:
        x.Sync = parseInt(y[1], 10);
    }
  });
  return x;
};

const data = [];
const resolveObj = (object) => {
  data.push({
    ...resolveArray(object.monday),
    name: object.name,
    date: '2019-06-10T14:47:51.055Z',
  });
  data.push({
    ...resolveArray(object.Tuesday),
    name: object.name,
    date: '2019-06-11T14:47:51.055Z',
  });
};

const resolveId = (name) => {
  // eslint-disable-next-line global-require
  const users = require('./users.json');
  const userArray = users.users;
  const single = userArray.filter(e => e.name === name);
  return single[0].id;
};

// eslint-disable-next-line no-plusplus
for (let i = 0; i < sheet1.length; i++) {
  if (sheet1[i].A) {
    resolveObj({
      name: sheet1[i].A,
      monday: sheet1[i].B.split(','),
      Tuesday: sheet1[i].C.split(','),
    });
  }
}

const r = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  const d = data[i];
  const id = resolveId(d.name);
  d.createdAt = new Date();
  d.updatedAt = new Date();
  d.userId = id;
  d.date = new Date(d.date);
  r.push(d);
}

models.Entry.bulkCreate(r);
// The command below has been executed and does not need to be re executed once more
/*
const createUsers = `
INSERT INTO
"Users" ("id","name", "level", "createdAt", "updatedAt") VALUES (DEFAULT,$1, $2, $3, $4);
`;

sheet1.forEach((e) => {
  if (e.A) {
    pool.query(createUsers, [e.A, 'sims', new Date(), new Date()]);
    console.log(`Successfully created ${e.A}`);
  }
});
*/
