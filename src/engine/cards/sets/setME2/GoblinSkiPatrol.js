"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSkiPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Ski Patrol", "Masters Edition II", "ME2");
  }
}

module.exports = GoblinSkiPatrol;
