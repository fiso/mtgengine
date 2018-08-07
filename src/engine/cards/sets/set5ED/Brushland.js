'use strict';
const Constants = require('../../../Constants');
const BrushlandBase = require('../set10E/Brushland');

class Brushland extends BrushlandBase {
  constructor (game) {
    super(game, 'Brushland', 'Fifth Edition', '5ED');
  }
}

module.exports = Brushland;
