"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordsofWorship extends UnimplementedCard {
  constructor(game) {
    super(game, "Words of Worship", "Onslaught", "ONS");
  }
}

module.exports = WordsofWorship;
