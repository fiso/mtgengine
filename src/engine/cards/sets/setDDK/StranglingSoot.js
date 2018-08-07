"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StranglingSoot extends UnimplementedCard {
  constructor (game) {
    super(game, "Strangling Soot", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = StranglingSoot;
