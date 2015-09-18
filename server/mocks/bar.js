module.exports = function(app) {
  var express = require('express');
  var barRouter = express.Router();

  barRouter.get('/', function(req, res) {
    setTimeout(function () {
      res.send({
        'bar': []
      });
    }, 2500);
  });

  barRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  barRouter.get('/:id', function(req, res) {
    res.send({
      'bar': {
        id: req.params.id
      }
    });
  });

  barRouter.put('/:id', function(req, res) {
    res.send({
      'bar': {
        id: req.params.id
      }
    });
  });

  barRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/bars', barRouter);
};
