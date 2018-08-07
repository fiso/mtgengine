"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheHerd extends UnimplementedCard {
  constructor (game) {
    super(game, "Call of the Herd", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = CalloftheHerd;
