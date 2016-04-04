"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormwingDragon extends Card {
  constructor(game) {
    super(game, "Stormwing Dragon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StormwingDragon;
