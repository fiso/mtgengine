"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatwingBrume extends Card {
  constructor(game) {
    super(game, "Batwing Brume", "Archenemy", "ARC");
  }
}

module.exports = BatwingBrume;
