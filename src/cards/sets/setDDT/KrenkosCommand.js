"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrenkosCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Krenko's Command", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = KrenkosCommand;
