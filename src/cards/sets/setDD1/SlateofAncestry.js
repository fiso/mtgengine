"use strict";
const Constants = require ("../../../Constants");
const SlateofAncestryBase = require("../setEVG/SlateofAncestry");

class SlateofAncestry extends SlateofAncestryBase {
  constructor (game) {
    super(game, "Slate of Ancestry", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = SlateofAncestry;
