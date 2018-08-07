'use strict';
const Constants = require('../../../Constants');
const AirElementalBase = require('../setM19/AirElemental');

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, 'Air Elemental', 'Revised Edition', '3ED');
  }
}

module.exports = AirElemental;
