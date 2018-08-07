"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitfallTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Pitfall Trap", "Modern Masters 2017", "MM3");
  }
}

module.exports = PitfallTrap;
