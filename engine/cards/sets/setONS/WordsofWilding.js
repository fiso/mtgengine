"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordsofWilding extends Card {
  constructor(game) {
    super(game, "Words of Wilding", "Onslaught", "ONS");
  }
}

module.exports = WordsofWilding;
