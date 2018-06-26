const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : 'postgresql-rugged-95094',
    user : '',
    password : '',
    database : 'facerec'
  }
});

module.exports = { db }
