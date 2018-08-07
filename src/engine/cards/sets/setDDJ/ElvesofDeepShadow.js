"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvesofDeepShadow extends UnimplementedCard {
  constructor (game) {
    super(game, "Elves of Deep Shadow", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ElvesofDeepShadow;
