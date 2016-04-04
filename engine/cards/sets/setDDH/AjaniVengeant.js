"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjaniVengeant extends UnimplementedCard {
  constructor(game) {
    super(game, "Ajani Vengeant", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AjaniVengeant;
