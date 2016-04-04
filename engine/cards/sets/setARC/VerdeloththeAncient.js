"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VerdeloththeAncient extends Card {
  constructor(game) {
    super(game, "Verdeloth the Ancient", "Archenemy", "ARC");
  }
}

module.exports = VerdeloththeAncient;
