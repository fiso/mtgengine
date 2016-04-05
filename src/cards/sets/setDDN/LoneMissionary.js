"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneMissionary extends UnimplementedCard {
  constructor(game) {
    super(game, "Lone Missionary", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LoneMissionary;
