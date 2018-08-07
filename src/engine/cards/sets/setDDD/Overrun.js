"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setCMA/Overrun");

class Overrun extends OverrunBase {
  constructor (game) {
    super(game, "Overrun", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Overrun;
