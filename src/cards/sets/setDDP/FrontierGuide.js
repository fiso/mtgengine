"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontierGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontier Guide", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = FrontierGuide;
