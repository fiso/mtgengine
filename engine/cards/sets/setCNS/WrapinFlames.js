"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WrapinFlames extends Card {
  constructor(game) {
    super(game, "Wrap in Flames", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WrapinFlames;
