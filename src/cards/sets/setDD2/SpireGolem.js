"use strict";
const Constants = require ("../../../Constants");
const SpireGolemBase = require("../setDST/SpireGolem");

class SpireGolem extends SpireGolemBase {
  constructor (game) {
    super(game, "Spire Golem", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SpireGolem;
