"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordsofWisdom extends UnimplementedCard {
  constructor(game) {
    super(game, "Words of Wisdom", "Odyssey", "ODY");
  }
}

module.exports = WordsofWisdom;
