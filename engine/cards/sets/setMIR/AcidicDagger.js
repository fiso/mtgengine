"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcidicDagger extends Card {
  constructor(game) {
    super(game, "Acidic Dagger", "Mirage", "MIR");
  }
}

module.exports = AcidicDagger;
