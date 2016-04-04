"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LyevSkyknight extends UnimplementedCard {
  constructor(game) {
    super(game, "Lyev Skyknight", "Return to Ravnica", "RTR");
  }
}

module.exports = LyevSkyknight;
