"use strict";
const Constants = require ("../../../Constants");
const PirateShipBase = require("../setCED/PirateShip");

class PirateShip extends PirateShipBase {
  constructor (game) {
    super(game, "Pirate Ship", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = PirateShip;
