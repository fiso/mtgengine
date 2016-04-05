"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Griffin Guide", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = GriffinGuide;
