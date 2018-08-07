"use strict";
const Constants = require ("../../../Constants");
const StabWoundBase = require("../setM15/StabWound");

class StabWound extends StabWoundBase {
  constructor (game) {
    super(game, "Stab Wound", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StabWound;
