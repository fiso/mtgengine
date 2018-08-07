'use strict';
const Constants = require('../../../Constants');
const HowlingMineBase = require('../setC16/HowlingMine');

class HowlingMine extends HowlingMineBase {
  constructor (game) {
    super(game, 'Howling Mine', 'Unlimited Edition', '2ED');
  }
}

module.exports = HowlingMine;
