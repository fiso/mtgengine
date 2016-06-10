"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SadisticHypnotist extends UnimplementedCard {
  constructor (game) {
    super(game, "Sadistic Hypnotist", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SadisticHypnotist;
