"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfiniteReflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Infinite Reflection", "Avacyn Restored", "AVR");
  }
}

module.exports = InfiniteReflection;
