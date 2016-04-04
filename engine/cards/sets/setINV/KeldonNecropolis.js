"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeldonNecropolis extends Card {
  constructor(game) {
    super(game, "Keldon Necropolis", "Invasion", "INV");
  }
}

module.exports = KeldonNecropolis;
