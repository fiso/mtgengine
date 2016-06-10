"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadStatuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Statuary", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DreadStatuary;
