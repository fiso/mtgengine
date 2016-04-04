"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reminisce extends UnimplementedCard {
  constructor(game) {
    super(game, "Reminisce", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Reminisce;
