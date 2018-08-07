'use strict';
const Constants = require('../../../Constants');
const TundraBase = require('../setVMA/Tundra');

class Tundra extends TundraBase {
  constructor (game) {
    super(game, 'Tundra', 'Unlimited Edition', '2ED');
  }
}

module.exports = Tundra;
