"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofMercy extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Mercy", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelofMercy;
