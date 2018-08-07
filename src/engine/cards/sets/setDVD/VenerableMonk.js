"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenerableMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Venerable Monk", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = VenerableMonk;
