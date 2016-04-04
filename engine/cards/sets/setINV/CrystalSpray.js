"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrystalSpray extends Card {
  constructor(game) {
    super(game, "Crystal Spray", "Invasion", "INV");
  }
}

module.exports = CrystalSpray;
