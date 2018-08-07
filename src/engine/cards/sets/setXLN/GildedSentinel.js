"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Gilded Sentinel", "Ixalan", "XLN");
  }
}

module.exports = GildedSentinel;
