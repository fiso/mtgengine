'use strict';
const Constants = require('../../../Constants');
const GloomBase = require('../setME4/Gloom');

class Gloom extends GloomBase {
  constructor (game) {
    super(game, 'Gloom', 'Revised Edition', '3ED');
  }
}

module.exports = Gloom;
