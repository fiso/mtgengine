"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GerrardsCommand extends Card {
  constructor(game) {
    super(game, "Gerrard's Command", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = GerrardsCommand;
