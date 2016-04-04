"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrystalQuarry extends Card {
  constructor(game) {
    super(game, "Crystal Quarry", "Odyssey", "ODY");
  }
}

module.exports = CrystalQuarry;
