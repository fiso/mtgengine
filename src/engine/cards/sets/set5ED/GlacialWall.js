'use strict';
const Constants = require('../../../Constants');
const GlacialWallBase = require('../setEMA/GlacialWall');

class GlacialWall extends GlacialWallBase {
  constructor (game) {
    super(game, 'Glacial Wall', 'Fifth Edition', '5ED');
  }
}

module.exports = GlacialWall;
