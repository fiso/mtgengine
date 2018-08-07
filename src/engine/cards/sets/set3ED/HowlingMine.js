'use strict';
const Constants = require('../../../Constants');
const HowlingMineBase = require('../setC16/HowlingMine');

class HowlingMine extends HowlingMineBase {
  constructor (game) {
    super(game, 'Howling Mine', 'Revised Edition', '3ED');
  }
}

module.exports = HowlingMine;
