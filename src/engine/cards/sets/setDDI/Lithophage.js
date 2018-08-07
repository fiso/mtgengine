"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lithophage extends UnimplementedCard {
  constructor (game) {
    super(game, "Lithophage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Lithophage;
