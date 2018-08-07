"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Trap", "Seventh Edition", "7ED");
  }
}

module.exports = PitTrap;
