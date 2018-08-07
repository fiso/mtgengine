"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirCutpurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Cutpurse", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = DimirCutpurse;
