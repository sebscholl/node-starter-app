import { serve } from 'bun'

import { db, views, router } from "@config/concerns";

const port = process.env.PORT || 3000;

global.App = {
  router,
  views,
  db
};

/* Start the server. */
serve({ port, fetch: router.fetch });
