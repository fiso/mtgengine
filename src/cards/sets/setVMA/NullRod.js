"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullRod extends UnimplementedCard {
  constructor(game) {
    super(game, "Null Rod", "Vintage Masters", "VMA");
  }
}

module.exports = NullRod;
