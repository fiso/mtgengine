"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaravanEscort extends UnimplementedCard {
  constructor (game) {
    super(game, "Caravan Escort", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CaravanEscort;
