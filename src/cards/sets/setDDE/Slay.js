"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Slay extends UnimplementedCard {
  constructor(game) {
    super(game, "Slay", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Slay;
