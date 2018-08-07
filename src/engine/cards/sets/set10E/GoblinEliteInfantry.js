"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinEliteInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Elite Infantry", "Tenth Edition", "10E");
  }
}

module.exports = GoblinEliteInfantry;
