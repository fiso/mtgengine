'use strict';
const Constants = require('../../../Constants');
const ErgRaidersBase = require('../setA25/ErgRaiders');

class ErgRaiders extends ErgRaidersBase {
  constructor (game) {
    super(game, 'Erg Raiders', 'Revised Edition', '3ED');
  }
}

module.exports = ErgRaiders;
