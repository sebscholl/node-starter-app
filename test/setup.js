import { exec } from 'child_process';
import { beforeEach } from 'bun:test';

import '@config/environment.js';
import { App } from '@config/application.js';


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