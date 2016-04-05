"use strict";
const Constants = require ("../../../Constants");
const MutilateBase = require("../setC14/Mutilate");

class Mutilate extends MutilateBase {
  constructor(game) {
    super(game, "Mutilate", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Mutilate;
