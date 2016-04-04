"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TavernSwindler extends UnimplementedCard {
  constructor(game) {
    super(game, "Tavern Swindler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TavernSwindler;
