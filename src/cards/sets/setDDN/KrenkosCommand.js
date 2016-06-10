"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrenkosCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Krenko's Command", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KrenkosCommand;
