"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathriteShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathrite Shaman", "Return to Ravnica", "RTR");
  }
}

module.exports = DeathriteShaman;
