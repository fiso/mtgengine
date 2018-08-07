'use strict';
const Constants = require('../../../Constants');
const ArmageddonClockBase = require('../setME4/ArmageddonClock');

class ArmageddonClock extends ArmageddonClockBase {
  constructor (game) {
    super(game, 'Armageddon Clock', 'Fourth Edition', '4ED');
  }
}

module.exports = ArmageddonClock;
