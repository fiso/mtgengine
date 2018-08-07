"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGrenade extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Grenade", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = GoblinGrenade;
