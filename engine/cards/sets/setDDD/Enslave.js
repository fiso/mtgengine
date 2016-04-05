"use strict";
const Constants = require ("../../../Constants");
const EnslaveBase = require("../setDD3_GVL/Enslave");

class Enslave extends EnslaveBase {
  constructor(game) {
    super(game, "Enslave", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Enslave;
