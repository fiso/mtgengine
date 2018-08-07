"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Patrol", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinPatrol;
