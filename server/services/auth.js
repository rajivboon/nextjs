const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');


const namespace = 'http://localhost:3000/';
// Middle weare
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,// cacheMaxEntries: 5, // Default value
        jwksRequestsPerMinute: 15,// cacheMaxAge: ms('10h'), // Default value
        jwksUri: 'https://quickmarriages.auth0.com/.well-known/jwks.json/'
    }),

    audience: '0ijPBeMRqJHNBxvQoQ9BeI7tde5qLqnQ',
    issuer: 'https://quickmarriages.auth0.com/',
    algorithms: ['RS256']
})
    
    exports.checkRole =role => (req, res, next)=> {
            const user = req.user;
            if (user && (user[namespace + 'role'] === role)) {
                next();
            }else {
                return res.status(401).send({title: 'Not Authorized', discription: 'you are not authorized to access this data'})
            }
        }
    
    
    



//  export.checkRole = function (role) {
// return function (req, res, next) {
//     const user = req.user;
//     if (user && (user[namespace + 'role'] === role)) {
//         next();
//     } else {
//         return res.status(401).send({ title: 'Not Authorized', discription: 'you are not authorized to access this data' })
//     }
// }
//     }
    
    
    
    
    
    
//     function (req, res, next) {
//     const isValidToken = true;

//     if (isValidToken) {

//         // req.user = {
//         //     name: 'Rajiv',
//         //     lastName: 'Boon'
//         // }
//         next();
        
//     } else {
//         return res.status(401).send({ title: 'Not Authrized', detail: 'please login in order to get a data' });
//     }

// } 