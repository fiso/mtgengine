"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcornCatapult extends Card {
  constructor(game) {
    super(game, "Acorn Catapult", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AcornCatapult;
