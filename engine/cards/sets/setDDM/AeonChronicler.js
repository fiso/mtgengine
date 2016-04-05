"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AeonChronicler extends UnimplementedCard {
  constructor(game) {
    super(game, "Aeon Chronicler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AeonChronicler;
