"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirSignet extends Card {
  constructor(game) {
    super(game, "Dimir Signet", "Archenemy", "ARC");
  }
}

module.exports = DimirSignet;
