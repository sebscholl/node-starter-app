export default {
  development: {
    url: 'postgresql://node_starter_app_development_user:node_starter_app_development_password@localhost:5432/node_starter_app_development_db'
  },
  test: {
    url: 'postgresql://node_starter_app_test_user:node_starter_app_test_password@localhost:5432/node_starter_app_test_db'
  },
  production: {
    url: process.env.DATABASE_URL
  }
};
