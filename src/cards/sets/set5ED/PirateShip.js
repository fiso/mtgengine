"use strict";
const Constants = require ("../../../Constants");
const PirateShipBase = require("../setTSB/PirateShip");

class PirateShip extends PirateShipBase {
  constructor (game) {
    super(game, "Pirate Ship", "Fifth Edition", "5ED");
  }
}

module.exports = PirateShip;
