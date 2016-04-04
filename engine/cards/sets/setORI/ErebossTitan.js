"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErebossTitan extends Card {
  constructor(game) {
    super(game, "Erebos's Titan", "Magic Origins", "ORI");
  }
}

module.exports = ErebossTitan;
