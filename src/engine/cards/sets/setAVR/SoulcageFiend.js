"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulcageFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulcage Fiend", "Avacyn Restored", "AVR");
  }
}

module.exports = SoulcageFiend;
