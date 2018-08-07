"use strict";
const Constants = require ("../../../Constants");
const EmberwildeAugurBase = require("../setEVG/EmberwildeAugur");

class EmberwildeAugur extends EmberwildeAugurBase {
  constructor (game) {
    super(game, "Emberwilde Augur", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = EmberwildeAugur;
