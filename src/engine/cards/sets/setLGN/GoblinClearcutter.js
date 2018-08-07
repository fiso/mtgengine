"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinClearcutter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Clearcutter", "Legions", "LGN");
  }
}

module.exports = GoblinClearcutter;
