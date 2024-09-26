# Node App Starter TODO

- Bun
- Hono
- Sequelize

# DB Creation

Connect to PostgreSQL as the postgres user: `sudo -u postgres psql`. See SQL statements in `db/tasks` directory for performing relevant setup actions. If any information is changed, it must be reflected in the `config/database.js` file.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run app/server.js
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
