"use strict";
const Constants = require ("../../../Constants");
const BogardanHellkiteBase = require("../setCM2/BogardanHellkite");

class BogardanHellkite extends BogardanHellkiteBase {
  constructor (game) {
    super(game, "Bogardan Hellkite", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BogardanHellkite;
