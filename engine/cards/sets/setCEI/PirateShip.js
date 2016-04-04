"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PirateShipBase = require("../setCED/PirateShip.js");

class PirateShip extends PirateShipBase {
  constructor(game) {
    super(game, "Pirate Ship", "International Collector's Edition", "CEI");
  }
}

module.exports = PirateShip;
