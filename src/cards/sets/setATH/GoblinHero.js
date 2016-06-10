"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Hero", "Anthologies", "ATH");
  }
}

module.exports = GoblinHero;
