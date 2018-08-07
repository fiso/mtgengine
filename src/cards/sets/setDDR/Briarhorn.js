"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Briarhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Briarhorn", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Briarhorn;
