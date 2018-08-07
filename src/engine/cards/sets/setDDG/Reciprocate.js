"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reciprocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Reciprocate", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Reciprocate;
