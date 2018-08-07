"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeektheHorizon extends UnimplementedCard {
  constructor (game) {
    super(game, "Seek the Horizon", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = SeektheHorizon;
