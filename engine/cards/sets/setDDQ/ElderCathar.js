"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderCathar extends UnimplementedCard {
  constructor(game) {
    super(game, "Elder Cathar", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ElderCathar;
