"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagisterofWorth extends Card {
  constructor(game) {
    super(game, "Magister of Worth", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MagisterofWorth;
