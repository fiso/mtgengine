"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornscapeApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Thornscape Apprentice", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ThornscapeApprentice;
