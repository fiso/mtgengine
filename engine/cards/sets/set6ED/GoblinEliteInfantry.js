"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinEliteInfantry extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Elite Infantry", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinEliteInfantry;
