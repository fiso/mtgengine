"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NowIKnowMyABCs extends UnimplementedCard {
  constructor(game) {
    super(game, "Now I Know My ABC's", "Unhinged", "UNH");
  }
}

module.exports = NowIKnowMyABCs;
