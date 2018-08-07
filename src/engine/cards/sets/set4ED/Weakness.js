'use strict';
const Constants = require('../../../Constants');
const WeaknessBase = require('../setME4/Weakness');

class Weakness extends WeaknessBase {
  constructor (game) {
    super(game, 'Weakness', 'Fourth Edition', '4ED');
  }
}

module.exports = Weakness;
