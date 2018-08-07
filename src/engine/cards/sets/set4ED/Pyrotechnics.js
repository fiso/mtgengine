'use strict';
const Constants = require('../../../Constants');
const PyrotechnicsBase = require('../setFRF/Pyrotechnics');

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, 'Pyrotechnics', 'Fourth Edition', '4ED');
  }
}

module.exports = Pyrotechnics;
