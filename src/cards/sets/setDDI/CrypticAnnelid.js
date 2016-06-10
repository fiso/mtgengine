"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrypticAnnelid extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptic Annelid", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CrypticAnnelid;
