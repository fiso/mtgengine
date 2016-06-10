"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummoningTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoning Trap", "Zendikar", "ZEN");
  }
}

module.exports = SummoningTrap;
