'use strict';
const Constants = require('../../../Constants');
const PirateShipBase = require('../setTSB/PirateShip');

class PirateShip extends PirateShipBase {
  constructor (game) {
    super(game, 'Pirate Ship', 'Unlimited Edition', '2ED');
  }
}

module.exports = PirateShip;
