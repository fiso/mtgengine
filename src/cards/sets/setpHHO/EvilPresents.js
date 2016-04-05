"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvilPresents extends UnimplementedCard {
  constructor(game) {
    super(game, "Evil Presents", "Happy Holidays", "pHHO");
  }
}

module.exports = EvilPresents;
