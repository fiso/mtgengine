"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGangLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Gang Leader", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = GoblinGangLeader;
