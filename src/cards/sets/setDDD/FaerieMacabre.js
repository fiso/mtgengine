"use strict";
const Constants = require ("../../../Constants");
const FaerieMacabreBase = require("../setDD3_GVL/FaerieMacabre");

class FaerieMacabre extends FaerieMacabreBase {
  constructor(game) {
    super(game, "Faerie Macabre", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = FaerieMacabre;
