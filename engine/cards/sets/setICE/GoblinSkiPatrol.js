"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSkiPatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Ski Patrol", "Ice Age", "ICE");
  }
}

module.exports = GoblinSkiPatrol;
