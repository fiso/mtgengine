"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolleyofBoulders extends UnimplementedCard {
  constructor (game) {
    super(game, "Volley of Boulders", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VolleyofBoulders;
