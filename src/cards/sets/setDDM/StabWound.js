"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StabWound extends UnimplementedCard {
  constructor (game) {
    super(game, "Stab Wound", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StabWound;
