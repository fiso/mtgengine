"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofResistance extends Card {
  constructor(game) {
    super(game, "Wall of Resistance", "Mirage", "MIR");
  }
}

module.exports = WallofResistance;
