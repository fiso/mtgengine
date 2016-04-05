"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquirrelNest extends UnimplementedCard {
  constructor(game) {
    super(game, "Squirrel Nest", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SquirrelNest;
