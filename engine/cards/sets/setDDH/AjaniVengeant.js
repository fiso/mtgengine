"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AjaniVengeant extends Card {
  constructor(game) {
    super(game, "Ajani Vengeant", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AjaniVengeant;
