"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObNixilisReignited extends UnimplementedCard {
  constructor (game) {
    super(game, "Ob Nixilis Reignited", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = ObNixilisReignited;
