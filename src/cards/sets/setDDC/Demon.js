"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demon extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Demon;
