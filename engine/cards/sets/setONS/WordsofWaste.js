"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordsofWaste extends UnimplementedCard {
  constructor(game) {
    super(game, "Words of Waste", "Onslaught", "ONS");
  }
}

module.exports = WordsofWaste;
