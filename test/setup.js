import { exec } from 'child_process';
import { beforeEach, expect } from 'bun:test';

import '@config/environment.js';
import '@config/application.js';

import '@test/support';

await new Promise((resolve, reject) => {
  const migrate = exec('sequelize db:migrate', { env: process.env },
    err => (err ? reject(err) : resolve())
  );

  migrate.stdout.pipe(process.stdout);
  migrate.stderr.pipe(process.stderr);
});

beforeEach(async () => {
  await App.db.truncate();
});
