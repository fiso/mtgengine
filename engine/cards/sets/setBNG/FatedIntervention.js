"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatedIntervention extends Card {
  constructor(game) {
    super(game, "Fated Intervention", "Born of the Gods", "BNG");
  }
}

module.exports = FatedIntervention;
