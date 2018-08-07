'use strict';
const Constants = require('../../../Constants');
const FearBase = require('../set10E/Fear');

class Fear extends FearBase {
  constructor (game) {
    super(game, 'Fear', 'Fourth Edition', '4ED');
  }
}

module.exports = Fear;
