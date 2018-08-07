"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TendrilsofCorruption extends UnimplementedCard {
  constructor (game) {
    super(game, "Tendrils of Corruption", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = TendrilsofCorruption;
