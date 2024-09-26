-- Create the new database
CREATE DATABASE node_starter_app_test_db;

-- Create the new user
CREATE USER node_starter_app_test_user WITH PASSWORD 'node_starter_app_test_password';

-- Grant superuser privileges to the new user
ALTER USER node_starter_app_test_user WITH SUPERUSER;

-- Connect to the new database
\c node_starter_app_test_db

-- Grant all privileges on the new database to the new user
GRANT ALL PRIVILEGES ON DATABASE node_starter_app_test_db TO node_starter_app_test_user;

-- Grant all privileges on all tables in the public schema to the new user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO node_starter_app_test_user;

-- Grant all privileges on all sequences in the public schema to the new user
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO node_starter_app_test_user;

-- Grant all privileges on the public schema to the new user
GRANT ALL PRIVILEGES ON SCHEMA public TO node_starter_app_test_user;

-- Make the new user the owner of the public schema
ALTER SCHEMA public OWNER TO node_starter_app_test_user;

-- Exit psql
\q