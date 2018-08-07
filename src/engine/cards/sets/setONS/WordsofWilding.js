"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordsofWilding extends UnimplementedCard {
  constructor (game) {
    super(game, "Words of Wilding", "Onslaught", "ONS");
  }
}

module.exports = WordsofWilding;
