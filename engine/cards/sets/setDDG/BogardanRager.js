"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogardanRager extends UnimplementedCard {
  constructor(game) {
    super(game, "Bogardan Rager", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BogardanRager;
