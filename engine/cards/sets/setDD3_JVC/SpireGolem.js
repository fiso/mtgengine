"use strict";
const Constants = require ("../../../Constants");
const SpireGolemBase = require("../setDST/SpireGolem");

class SpireGolem extends SpireGolemBase {
  constructor(game) {
    super(game, "Spire Golem", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = SpireGolem;
