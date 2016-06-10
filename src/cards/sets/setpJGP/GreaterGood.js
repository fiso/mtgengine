"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterGood extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Good", "Judge Gift Program", "pJGP");
  }
}

module.exports = GreaterGood;
