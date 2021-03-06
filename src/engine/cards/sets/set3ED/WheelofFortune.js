'use strict';
const Constants = require('../../../Constants');
const WheelofFortuneBase = require('../setVMA/WheelofFortune');

class WheelofFortune extends WheelofFortuneBase {
  constructor (game) {
    super(game, 'Wheel of Fortune', 'Revised Edition', '3ED');
  }
}

module.exports = WheelofFortune;
