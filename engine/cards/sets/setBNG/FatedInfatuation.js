"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatedInfatuation extends Card {
  constructor(game) {
    super(game, "Fated Infatuation", "Born of the Gods", "BNG");
  }
}

module.exports = FatedInfatuation;
