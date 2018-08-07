"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VinelasherKudzu extends UnimplementedCard {
  constructor (game) {
    super(game, "Vinelasher Kudzu", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = VinelasherKudzu;
