-- Connect to PostgreSQL as the postgres user
-- (You should already be connected if you followed the previous instructions)

-- Create the new database
CREATE DATABASE core_node_zar_development_db;

-- Create the new user
CREATE USER core_node_zar_development_user WITH PASSWORD 'core_node_zar_development_password';

-- Grant superuser privileges to the new user
ALTER USER core_node_zar_development_user WITH SUPERUSER;

-- Connect to the new database
\c core_node_zar_development_db

-- Grant all privileges on the new database to the new user
GRANT ALL PRIVILEGES ON DATABASE core_node_zar_development_db TO core_node_zar_development_user;

-- Grant all privileges on all tables in the public schema to the new user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO core_node_zar_development_user;

-- Grant all privileges on all sequences in the public schema to the new user
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO core_node_zar_development_user;

-- Grant all privileges on the public schema to the new user
GRANT ALL PRIVILEGES ON SCHEMA public TO core_node_zar_development_user;

-- Make the new user the owner of the public schema
ALTER SCHEMA public OWNER TO core_node_zar_development_user;

-- Exit psql
\q