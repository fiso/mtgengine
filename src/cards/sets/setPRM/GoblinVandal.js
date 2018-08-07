"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinVandal extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Vandal", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinVandal;
