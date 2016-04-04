"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrypticAnnelid extends Card {
  constructor(game) {
    super(game, "Cryptic Annelid", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CrypticAnnelid;
