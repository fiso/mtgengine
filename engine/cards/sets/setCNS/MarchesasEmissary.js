"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarchesasEmissary extends Card {
  constructor(game) {
    super(game, "Marchesa's Emissary", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MarchesasEmissary;
