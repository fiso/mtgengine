"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordsofWaste extends Card {
  constructor(game) {
    super(game, "Words of Waste", "Onslaught", "ONS");
  }
}

module.exports = WordsofWaste;
