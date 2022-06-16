const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

//01//////////////////////leaders

leaderRouter.route('/')//mount this express router at the /dishes endpoint.chain all GET PUT POST DELET method already do this router

.all((req,res,next) => {//‘/dishes' endpoint,/dishes REST API endpoint，(req,res，next）callback function)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');//send plaintext replies back to client.
    next();//looking for additional specifications down below here which will match /dishes endpoint
})

.get((req,res,next) => {
    res.end('Will send all the leaders info to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})//parse body and added into the req object as req.body
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders info');
});

//02//////////////////////leaderId

leaderRouter.route('/:leaderId') 
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();//looking for additional specifications down below here which will match /dishes endpoint
})

.get((req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})

.put((req, res, next) => {
  res.write('Updating the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});


module.exports = leaderRouter ;