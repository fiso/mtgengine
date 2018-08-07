"use strict";
const Constants = require ("../../../Constants");
const BreathofDarigaazBase = require("../setCM2/BreathofDarigaaz");

class BreathofDarigaaz extends BreathofDarigaazBase {
  constructor (game) {
    super(game, "Breath of Darigaaz", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BreathofDarigaaz;
