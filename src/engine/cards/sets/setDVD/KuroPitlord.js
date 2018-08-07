"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KuroPitlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Kuro, Pitlord", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = KuroPitlord;
