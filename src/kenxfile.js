// Update with your config settings.

module.exports = {
    development: {
      client: 'Mysql',
      connection: {
        host: 'localhost',
        database: 'mydb',
        user:     'root',
        password: 'password',
        port: '3307'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
   staging: {
      client: 'mysql',
      connection: {
        database: 'hyf_staging',
        user:     'test',
        password: 'test'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'mysql',
      connection: {
        database: 'hyf',
        user:     'test',
        password: 'test'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  