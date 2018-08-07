"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordsofWind extends UnimplementedCard {
  constructor (game) {
    super(game, "Words of Wind", "Onslaught", "ONS");
  }
}

module.exports = WordsofWind;
