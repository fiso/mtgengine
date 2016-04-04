"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinKing extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin King", "Anthologies", "ATH");
  }
}

module.exports = GoblinKing;
