"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlithFirewalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Slith Firewalker", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = SlithFirewalker;
