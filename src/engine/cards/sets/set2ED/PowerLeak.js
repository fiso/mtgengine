'use strict';
const Constants = require('../../../Constants');
const PowerLeakBase = require('../set4ED/PowerLeak');

class PowerLeak extends PowerLeakBase {
  constructor (game) {
    super(game, 'Power Leak', 'Unlimited Edition', '2ED');
  }
}

module.exports = PowerLeak;
