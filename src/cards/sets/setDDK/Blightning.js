"use strict";
const Constants = require ("../../../Constants");
const BlightningBase = require("../setA25/Blightning");

class Blightning extends BlightningBase {
  constructor (game) {
    super(game, "Blightning", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Blightning;
