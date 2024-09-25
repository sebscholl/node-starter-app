export default {
  development: {
    url: 'postgresql://core_node_zar_development_user:core_node_zar_development_password@localhost:5432/core_node_zar_development_db'
  },
  test: {
    url: 'postgresql://core_node_zar_test_user:core_node_zar_test_password@localhost:5432/core_node_zar_test_db'
  },
  production: {
    url: process.env.DATABASE_URL
  }
};
