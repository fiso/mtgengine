"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FutureSight extends UnimplementedCard {
  constructor (game) {
    super(game, "Future Sight", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = FutureSight;
