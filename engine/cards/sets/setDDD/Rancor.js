"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setARC/Rancor");

class Rancor extends RancorBase {
  constructor(game) {
    super(game, "Rancor", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Rancor;
