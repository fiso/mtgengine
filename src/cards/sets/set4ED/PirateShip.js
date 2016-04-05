"use strict";
const Constants = require ("../../../Constants");
const PirateShipBase = require("../setCED/PirateShip");

class PirateShip extends PirateShipBase {
  constructor(game) {
    super(game, "Pirate Ship", "Fourth Edition", "4ED");
  }
}

module.exports = PirateShip;
