module.exports = function(app) {
  var express = require('express');
  var fooRouter = express.Router();

  fooRouter.get('/', function(req, res) {
    res.send({
      'foo': []
    });
  });

  fooRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  fooRouter.get('/:id', function(req, res) {
    res.send({
      'foo': {
        id: req.params.id
      }
    });
  });

  fooRouter.put('/:id', function(req, res) {
    res.send({
      'foo': {
        id: req.params.id
      }
    });
  });

  fooRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/foos', fooRouter);
};
