const nextRoutes = require('next-routes')();

const routes = nextRoutes;
module.exports = nextRoutes;

const allowedLocales = '(en|ar)';
const locale = `/:locale${allowedLocales}`;

routes
    .add({
        name: 'about',
        pattern: `${locale}/about`,
        page: 'about',
    })
    .add({
        name: 'index',
        pattern: `${locale}/`,
        page: 'index',
    });
