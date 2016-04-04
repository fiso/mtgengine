"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodSage extends Card {
  constructor(game) {
    super(game, "Wood Sage", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WoodSage;
