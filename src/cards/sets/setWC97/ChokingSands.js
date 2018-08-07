"use strict";
const Constants = require ("../../../Constants");
const ChokingSandsBase = require("../setVMA/ChokingSands");

class ChokingSands extends ChokingSandsBase {
  constructor (game) {
    super(game, "Choking Sands", "World Championship Decks 1997", "WC97");
  }
}

module.exports = ChokingSands;
