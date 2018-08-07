"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapyardMongrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrapyard Mongrel", "Magic 2015", "M15");
  }
}

module.exports = ScrapyardMongrel;
