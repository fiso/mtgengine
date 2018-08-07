"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OniPossession extends UnimplementedCard {
  constructor (game) {
    super(game, "Oni Possession", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = OniPossession;
