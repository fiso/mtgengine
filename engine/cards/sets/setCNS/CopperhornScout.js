"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CopperhornScout extends Card {
  constructor(game) {
    super(game, "Copperhorn Scout", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CopperhornScout;
