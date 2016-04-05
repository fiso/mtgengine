"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KyrenToy extends UnimplementedCard {
  constructor(game) {
    super(game, "Kyren Toy", "Mercadian Masques", "MMQ");
  }
}

module.exports = KyrenToy;
