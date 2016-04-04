"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordsofWar extends Card {
  constructor(game) {
    super(game, "Words of War", "Onslaught", "ONS");
  }
}

module.exports = WordsofWar;
