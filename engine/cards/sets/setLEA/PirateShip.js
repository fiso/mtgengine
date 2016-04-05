"use strict";
const Constants = require ("../../../Constants");
const PirateShipBase = require("../setCED/PirateShip");

class PirateShip extends PirateShipBase {
  constructor(game) {
    super(game, "Pirate Ship", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PirateShip;
