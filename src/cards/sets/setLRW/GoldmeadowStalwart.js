"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldmeadowStalwart extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldmeadow Stalwart", "Lorwyn", "LRW");
  }
}

module.exports = GoldmeadowStalwart;
