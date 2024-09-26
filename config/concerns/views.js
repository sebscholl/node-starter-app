/**
 * Gather all the view functions and exports them with the render function.
 */
import { globSync } from 'glob';

export default function (appInstance) {
  const views = globSync('./app/views/**/*.js').reduce((map, file) => {
    const viewsKey = file.match(/views\/(.*?).js/)[1]
    map[viewsKey] = require(file).default;
    return map;
  }, {});

  views.render = (viewKey, ctx, locals) => views[viewKey](ctx, locals);

  appInstance.views = views;

  return views;
};
