"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummoningTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoning Trap", "Modern Masters 2017", "MM3");
  }
}

module.exports = SummoningTrap;
