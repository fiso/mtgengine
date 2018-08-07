"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavenwoodBattleground extends UnimplementedCard {
  constructor (game) {
    super(game, "Havenwood Battleground", "Commander Anthology", "CMA");
  }
}

module.exports = HavenwoodBattleground;
