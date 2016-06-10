"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryCrystal extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Crystal", "Exodus", "EXO");
  }
}

module.exports = MemoryCrystal;
