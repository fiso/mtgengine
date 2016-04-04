"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalCommand extends Card {
  constructor(game) {
    super(game, "Primal Command", "Archenemy", "ARC");
  }
}

module.exports = PrimalCommand;
