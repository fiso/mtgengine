'use strict';
const Constants = require('../../../Constants');
const UthdenTrollBase = require('../setTSB/UthdenTroll');

class UthdenTroll extends UthdenTrollBase {
  constructor (game) {
    super(game, 'Uthden Troll', 'Revised Edition', '3ED');
  }
}

module.exports = UthdenTroll;
