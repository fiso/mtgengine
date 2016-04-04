"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinRally extends Card {
  constructor(game) {
    super(game, "Goblin Rally", "Return to Ravnica", "RTR");
  }
}

module.exports = GoblinRally;
