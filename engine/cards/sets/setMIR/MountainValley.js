"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MountainValley extends Card {
  constructor(game) {
    super(game, "Mountain Valley", "Mirage", "MIR");
  }
}

module.exports = MountainValley;
