"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquirrelNest extends Card {
  constructor(game) {
    super(game, "Squirrel Nest", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SquirrelNest;
