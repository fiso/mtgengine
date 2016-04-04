"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flamewright extends Card {
  constructor(game) {
    super(game, "Flamewright", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Flamewright;
