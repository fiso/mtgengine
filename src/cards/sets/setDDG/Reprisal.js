"use strict";
const Constants = require ("../../../Constants");
const ReprisalBase = require("../setJOU/Reprisal");

class Reprisal extends ReprisalBase {
  constructor (game) {
    super(game, "Reprisal", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Reprisal;
