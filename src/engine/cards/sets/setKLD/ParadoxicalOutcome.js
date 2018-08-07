"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParadoxicalOutcome extends UnimplementedCard {
  constructor (game) {
    super(game, "Paradoxical Outcome", "Kaladesh", "KLD");
  }
}

module.exports = ParadoxicalOutcome;
