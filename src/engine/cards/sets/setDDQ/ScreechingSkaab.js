"use strict";
const Constants = require ("../../../Constants");
const ScreechingSkaabBase = require("../setEMA/ScreechingSkaab");

class ScreechingSkaab extends ScreechingSkaabBase {
  constructor (game) {
    super(game, "Screeching Skaab", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ScreechingSkaab;
