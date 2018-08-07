"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkeroftheGrove extends UnimplementedCard {
  constructor (game) {
    super(game, "Walker of the Grove", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = WalkeroftheGrove;
