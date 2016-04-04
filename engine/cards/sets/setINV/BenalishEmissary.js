"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishEmissary extends Card {
  constructor(game) {
    super(game, "Benalish Emissary", "Invasion", "INV");
  }
}

module.exports = BenalishEmissary;
