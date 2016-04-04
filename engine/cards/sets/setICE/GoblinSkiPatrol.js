"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSkiPatrol extends Card {
  constructor(game) {
    super(game, "Goblin Ski Patrol", "Ice Age", "ICE");
  }
}

module.exports = GoblinSkiPatrol;
