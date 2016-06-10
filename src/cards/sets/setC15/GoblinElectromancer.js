"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinElectromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Electromancer", "Commander 2015", "C15");
  }
}

module.exports = GoblinElectromancer;
