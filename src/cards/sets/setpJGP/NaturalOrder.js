"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalOrder extends UnimplementedCard {
  constructor(game) {
    super(game, "Natural Order", "Judge Gift Program", "pJGP");
  }
}

module.exports = NaturalOrder;
