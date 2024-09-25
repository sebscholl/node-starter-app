import { serve } from 'bun'

import router, { fetch } from "@config/router";

import db from "@db/";

const port = process.env.PORT || 3000;

export const App = {
  router,
  db
};

/* Start the server. */
serve({ port, fetch });
