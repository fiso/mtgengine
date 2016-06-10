"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CouncilGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Council Guardian", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CouncilGuardian;
