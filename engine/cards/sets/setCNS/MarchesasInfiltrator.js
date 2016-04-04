"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarchesasInfiltrator extends Card {
  constructor(game) {
    super(game, "Marchesa's Infiltrator", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MarchesasInfiltrator;
