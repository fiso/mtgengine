"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchedRusalka extends UnimplementedCard {
  constructor(game) {
    super(game, "Scorched Rusalka", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ScorchedRusalka;
