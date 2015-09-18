module.exports = function(app) {
  var express = require('express');
  var bazRouter = express.Router();

  bazRouter.get('/', function(req, res) {
    setTimeout(function () {
      res.send({
        'baz': []
      });
    }, 2500);
  });

  bazRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  bazRouter.get('/:id', function(req, res) {
    res.send({
      'baz': {
        id: req.params.id
      }
    });
  });

  bazRouter.put('/:id', function(req, res) {
    res.send({
      'baz': {
        id: req.params.id
      }
    });
  });

  bazRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/bazs', bazRouter);
};
