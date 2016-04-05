"use strict";
const Constants = require ("../../../Constants");
const PirateShipBase = require("../setCED/PirateShip");

class PirateShip extends PirateShipBase {
  constructor(game) {
    super(game, "Pirate Ship", "International Collector's Edition", "CEI");
  }
}

module.exports = PirateShip;
