"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurrenderYourThoughts extends Card {
  constructor(game) {
    super(game, "Surrender Your Thoughts", "Archenemy", "ARC");
  }
}

module.exports = SurrenderYourThoughts;
