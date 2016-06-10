"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Saproling extends UnimplementedCard {
  constructor (game) {
    super(game, "Saproling", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Saproling;
