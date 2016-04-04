"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Harmonize extends Card {
  constructor(game) {
    super(game, "Harmonize", "Archenemy", "ARC");
  }
}

module.exports = Harmonize;
