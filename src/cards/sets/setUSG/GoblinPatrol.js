"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Patrol", "Urza's Saga", "USG");
  }
}

module.exports = GoblinPatrol;
