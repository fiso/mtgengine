"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anger extends UnimplementedCard {
  constructor (game) {
    super(game, "Anger", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Anger;
