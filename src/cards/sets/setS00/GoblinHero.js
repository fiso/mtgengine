"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Hero", "Starter 2000", "S00");
  }
}

module.exports = GoblinHero;
