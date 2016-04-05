"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssassinsStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Assassin's Strike", "Return to Ravnica", "RTR");
  }
}

module.exports = AssassinsStrike;
