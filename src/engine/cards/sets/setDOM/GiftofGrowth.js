"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Gift of Growth", "Dominaria", "DOM");
  }
}

module.exports = GiftofGrowth;
