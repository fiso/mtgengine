"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinVandal extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Vandal", "Anthologies", "ATH");
  }
}

module.exports = GoblinVandal;
