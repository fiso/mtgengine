"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRally extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Rally", "Return to Ravnica", "RTR");
  }
}

module.exports = GoblinRally;
