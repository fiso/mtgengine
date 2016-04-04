"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShreddingWinds extends UnimplementedCard {
  constructor(game) {
    super(game, "Shredding Winds", "Theros", "THS");
  }
}

module.exports = ShreddingWinds;
