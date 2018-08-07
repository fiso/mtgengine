"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FertileThicket extends UnimplementedCard {
  constructor (game) {
    super(game, "Fertile Thicket", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = FertileThicket;
