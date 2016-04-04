"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SadisticAugermage extends UnimplementedCard {
  constructor(game) {
    super(game, "Sadistic Augermage", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SadisticAugermage;
