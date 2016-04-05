"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Prohibit extends UnimplementedCard {
  constructor(game) {
    super(game, "Prohibit", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Prohibit;
