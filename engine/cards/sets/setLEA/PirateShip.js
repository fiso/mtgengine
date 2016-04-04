"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PirateShipBase = require("../setCED/PirateShip.js");

class PirateShip extends PirateShipBase {
  constructor(game) {
    super(game, "Pirate Ship", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PirateShip;
