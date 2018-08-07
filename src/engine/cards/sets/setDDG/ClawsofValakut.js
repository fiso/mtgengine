"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClawsofValakut extends UnimplementedCard {
  constructor (game) {
    super(game, "Claws of Valakut", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ClawsofValakut;
