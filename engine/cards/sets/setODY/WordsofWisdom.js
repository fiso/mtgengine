"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordsofWisdom extends Card {
  constructor(game) {
    super(game, "Words of Wisdom", "Odyssey", "ODY");
  }
}

module.exports = WordsofWisdom;
