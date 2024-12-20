/**
 * ⚠️ IMPORTANT ⚠️
 * 
 * If registering a routes, edit the routes.js file in the same directory. This file is only
 * for the matching logic of the routes. No routes should be defined here or handler functions.
 */
import { Hono } from 'hono'

import routes from '@app/routes.js';

function importHandler(handlerId) {
  const [controllerPath, actionName] = handlerId.split('.');
  return require(controllerPath).default[actionName];
}

export default function (appInstance) {
  const router = new Hono({ strict: false })

  routes.forEach(
    async ({ method, path, handler: routeHandler }) => {
      switch (typeof routeHandler) {
        case 'string':
          router.on(method, path, importHandler(routeHandler))
          break;
        case 'function':
          router.on(method, path, routeHandler)
          break;
        default:
          throw new Error('Invalid route handler')
      }
    }
  );

  appInstance.router = router;

  /* This is the router instance that will be made available to the application */
  return router;
}