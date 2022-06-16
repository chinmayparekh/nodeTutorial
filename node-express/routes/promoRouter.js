const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();//

promoRouter.use(bodyParser.json());

//01//////////////////////promotions

promoRouter.route('/')//mount this express router at the /dishes endpoint.chain all GET PUT POST DELET method already do this router

.all((req,res,next) => {//‘/dishes' endpoint,/dishes REST API endpoint，(req,res，next）callback function)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');//send plaintext replies back to client.
    next();//looking for additional specifications down below here which will match /dishes endpoint
})

.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions dish: ' + req.body.name + ' with details: ' + req.body.description);
})//parse body and added into the req object as req.body
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotion info');
});

//02//////////////////////promoId

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();//looking for additional specifications down below here which will match /dishes endpoint
})

.get((req,res,next) => {
    res.end('Will send details of the promotion dish: ' + req.params.promoId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})

.put((req, res, next) => {
  res.write('Updating the promotion dish: ' + req.params.promoId + '\n');
  res.end('Will update the promotion dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion dish: ' + req.params.promoId);
});


module.exports = promoRouter;