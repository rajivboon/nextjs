const express = require('express');
const next = require('next');
const routes = require('../routes');

// service
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const secretData = [
    {
        title: 'seredafd data 1',
        description: 'plans how to build '
    },
    {
        title: 'sercond data 2',
        description: ' tsfg sdggh build '
    }
]

app.prepare()
    .then(() => {
        const server = express();

        server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
            console.log('-------------consoling User----------------');
            // console.log(req.user);
            return res.json(secretData);
        })
        
        server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
            // console.log('-------------consoling User----------------');
            // console.log(req.user);
            return res.json(secretData);
        })


        server.get('*', (req, res) => {
            // console.log('-------------serving all requests--------');
            return handle(req, res)
        })

        // server.use(function (err, req, res, next) {
        //     if (err.name === 'UnauthorizedError') {
        //         res.status(401).send({title: 'unauthorized', detail: 'unauthorized access!'});
        //     }
        // });

        server.use(handle).listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })