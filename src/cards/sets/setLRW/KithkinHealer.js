"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Kithkin Healer", "Lorwyn", "LRW");
  }
}

module.exports = KithkinHealer;
