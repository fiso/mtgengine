"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunderingTitan extends Card {
  constructor(game) {
    super(game, "Sundering Titan", "Archenemy", "ARC");
  }
}

module.exports = SunderingTitan;
