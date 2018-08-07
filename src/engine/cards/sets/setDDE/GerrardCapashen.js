"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardCapashen extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard Capashen", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = GerrardCapashen;
