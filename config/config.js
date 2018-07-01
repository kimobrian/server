let config = {
  "development": {
    "use_env_variable": process.env.DATABASE_URL,
    "dialect": "postgres"
  },
  "staging": {
    "use_env_variable": process.env.DATABASE_URL,
    "dialect": "postgres"
  },
  "test": {
    "username": "",
    "password": null,
    "database": "wire_dev_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
};

module.exports = config;
