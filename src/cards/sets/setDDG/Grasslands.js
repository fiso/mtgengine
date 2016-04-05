"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grasslands extends UnimplementedCard {
  constructor(game) {
    super(game, "Grasslands", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Grasslands;
