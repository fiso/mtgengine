"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticMonastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Monastery", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = MysticMonastery;
