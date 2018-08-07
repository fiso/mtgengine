"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CouncilGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Council Guardian", "Conspiracy", "CNS");
  }
}

module.exports = CouncilGuardian;
