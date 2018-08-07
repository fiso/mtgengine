"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YokeoftheDamned extends UnimplementedCard {
  constructor (game) {
    super(game, "Yoke of the Damned", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = YokeoftheDamned;
