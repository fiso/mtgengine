"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanVerge extends Card {
  constructor(game) {
    super(game, "Krosan Verge", "Archenemy", "ARC");
  }
}

module.exports = KrosanVerge;
