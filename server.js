const express = require('express');
const next = require('next');
const routes = require('./routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();

    // set index route with default locale
    server.get('/', (req, res) => {
        res.redirect('/en/');
    });

    // the usual route
    server.get('/:locale/*', (req, res) => handle(req, res));

    // simply handle the static/next/locale stuff
    server.get('/static', (req, res) => handle(req, res));

    server.listen('3000', (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });    
})
