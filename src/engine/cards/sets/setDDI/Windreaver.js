"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Windreaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Windreaver", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Windreaver;
