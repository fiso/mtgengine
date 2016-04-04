"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordsofWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Words of War", "Onslaught", "ONS");
  }
}

module.exports = WordsofWar;
