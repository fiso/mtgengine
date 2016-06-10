"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardsCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard's Command", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = GerrardsCommand;
