"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TropicalStorm extends Card {
  constructor(game) {
    super(game, "Tropical Storm", "Mirage", "MIR");
  }
}

module.exports = TropicalStorm;
